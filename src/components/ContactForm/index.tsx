import { useState } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { useForm, ValidationError } from "@formspree/react";
import { ContactProps, ValidationTypeProps } from "./types";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { validateProps } from "../../common/types";

const initialValues: validateProps = {
  name: "",
  company: "",
  email: "",
  operations: "",
};


const Contact = ({ id }: ContactProps) => {
  const [state, formspreeSubmit, resetFormspree] = useForm("mykoprne");
  const [values, setValues] = useState<validateProps>({ ...initialValues });
  const [errors, setErrors] = useState<Partial<validateProps>>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    await formspreeSubmit({
      name: values.name,
      email: values.email,
      company: values.company,
      operations: values.operations,
    });
  };

  const handleSendAnother = () => {
    resetFormspree();
    setValues({ ...initialValues });
    setErrors({});
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const message = errors[type as keyof typeof errors];
    return <Span>{message}</Span>;
  };

  if (state.succeeded) {
    return (
      <ContactContainer id={id}>
        <Row justify="center">
          <Col lg={12} md={16} sm={24} xs={24}>
            <Fade triggerOnce fraction={0.2}>
              <p>Thanks for your enquiry — we&apos;ll be in touch shortly.</p>
              <ButtonContainer>
                <Button type="button" onClick={handleSendAnother}>
                  Send another message
                </Button>
              </ButtonContainer>
            </Fade>
          </Col>
        </Row>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer id={id}>
      <Row justify="center">
        <Col lg={12} md={16} sm={24} xs={24}>
          <Fade triggerOnce fraction={0.2}>
            <FormGroup autoComplete="off" onSubmit={handleFormSubmit}>
              <Row gutter={[20, 0]}>
                <Col xs={24} md={12}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </Col>
                <Col xs={24} md={12}>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    value={values.company}
                    onChange={handleChange}
                  />
                  <ValidationType type="company" />
                  <ValidationError
                    prefix="Company"
                    field="company"
                    errors={state.errors}
                  />
                </Col>
                <Col span={24}>
                  <TextArea
                    placeholder="Describe your operations"
                    value={values.operations}
                    name="operations"
                    onChange={handleChange}
                  />
                  <ValidationType type="operations" />
                  <ValidationError
                    prefix="Operations"
                    field="operations"
                    errors={state.errors}
                  />
                </Col>
              </Row>
              <ButtonContainer>
                <Button disabled={state.submitting}>
                  {state.submitting ? "Sending…" : "Submit"}
                </Button>
              </ButtonContainer>
            </FormGroup>
          </Fade>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
