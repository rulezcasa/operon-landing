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
  email: "",
  business: "",
  teamTime: "",
  channels: "",
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
      business: values.business,
      teamTime: values.teamTime,
      channels: values.channels,
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
                    label="Name"
                    placeholder="Your name"
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
                    label="Email"
                    placeholder="Your email"
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
                    name="business"
                    label="What does your business do?"
                    placeholder="We run a ___________"
                    value={values.business}
                    onChange={handleChange}
                  />
                  <ValidationType type="business" />
                  <ValidationError
                    prefix="Business"
                    field="business"
                    errors={state.errors}
                  />
                </Col>
                <Col span={24}>
                  <TextArea
                    name="teamTime"
                    label="What's keeping your team busy?"
                    placeholder="Briefly tell us what's taking up most of your team's time right now?"
                    value={values.teamTime}
                    onChange={handleChange}
                  />
                  <ValidationType type="teamTime" />
                  <ValidationError
                    prefix="Team time"
                    field="teamTime"
                    errors={state.errors}
                  />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    name="channels"
                    label="Which channels are your customers reaching you on?"
                    placeholder="e.g. WhatsApp, phone calls, walk-ins - whatever applies."
                    value={values.channels}
                    onChange={handleChange}
                  />
                  <ValidationType type="channels" />
                  <ValidationError
                    prefix="Channels"
                    field="channels"
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
