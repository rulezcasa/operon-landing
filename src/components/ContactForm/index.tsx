import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ id }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="center">
        <Col lg={12} md={16} sm={24} xs={24}>
          <Fade triggerOnce fraction={0.2}>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Row gutter={[20, 0]}>
                <Col xs={24} md={12}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
                </Col>
                <Col xs={24} md={12}>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    value={values.company || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="company" />
                </Col>
                <Col span={24}>
                  <TextArea
                    placeholder="Describe your operations"
                    value={values.operations || ""}
                    name="operations"
                    onChange={handleChange}
                  />
                  <ValidationType type="operations" />
                </Col>
              </Row>
              <ButtonContainer>
                <Button name="submit">Submit</Button>
              </ButtonContainer>
            </FormGroup>
          </Fade>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
