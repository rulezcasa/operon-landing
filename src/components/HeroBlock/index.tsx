import { Row, Col } from "antd";
import { Button } from "../../common/Button";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  HeroLayout,
  SideVideo,
} from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
}

const MiddleBlock = ({ title, content, button }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Row justify="center" align="middle">
        <HeroLayout>
          <SideVideo autoPlay loop muted playsInline preload="metadata">
            <source src="/img/hero_vid.mp4" type="video/mp4" />
          </SideVideo>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h1>{title}</h1>
              <Content>{content}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {button}
                </Button>
              )}
            </Col>
          </ContentWrapper>
          <SideVideo autoPlay loop muted playsInline preload="metadata">
            <source src="/img/hero_vid.mp4" type="video/mp4" />
          </SideVideo>
        </HeroLayout>
      </Row>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
