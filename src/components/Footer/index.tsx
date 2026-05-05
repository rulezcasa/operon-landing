import { Row, Col } from "antd";
import { LogoMark } from "../../common/LogoMark";
import Container from "../../common/Container";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Copyright,
  Language,
} from "./styles";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={24} xs={24}>
              <Language>Contact</Language>
              <Para>
                Do you have any question? Feel free to reach out.
              </Para>
              <a href="mailto:harish.thangaraj03@outlook.com">
                <Chat>Email Us</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={24} xs={24}>
              <Title>Policy</Title>
              <Large to="/">Privacy Policy</Large>
              <Large to="/">Terms of Service</Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/" aria-label="Operon AI home">
              <LogoContainer>
                <LogoMark size="sm" />
              </LogoContainer>
            </NavLink>
            <Copyright>© {new Date().getFullYear()} Operon AI.</Copyright>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;
