import { lazy } from "react";
import { Helmet } from "react-helmet";
import HeroContent from "../../content/HeroContent.json";
import AboutContent from "../../content/AboutContent.json";
import SecurityContent from "../../content/SecurityContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const HeroBlock = lazy(() => import("../../components/HeroBlock"));
const IndustryChatMockups = lazy(
  () => import("../../components/IndustryChatMockups")
);
const ScrollExpandingPainPoints = lazy(
  () => import("../../components/ScrollExpandingPainPoints")
);
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const SecurityVisual = lazy(() => import("../../components/SecurityVisual"));

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Operon AI</title>
        <meta
          name="description"
          content="Operon AI helps businesses automate customer interactions, operations, and workflows with secure, AI-powered solutions."
        />
      </Helmet>
      <ScrollToTop />
      <HeroBlock
        title={HeroContent.title}
        content={HeroContent.text}
        button={HeroContent.button}
      />
      <IndustryChatMockups />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="/img/software.png"
        id="about"
      />
      <ScrollExpandingPainPoints />
      <ContentBlock
        direction="right"
        title={SecurityContent.title}
        content={SecurityContent.text}
        topIcon="/img/lock.svg"
        icon="/img/security_graphic.png"
        illustration={<SecurityVisual />}
        id="mission"
      />
      <ContentBlock
        direction="left"
        lightTheme
        title={ProductContent.title}
        content={ProductContent.text}
        icon="/img/contact.png"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
