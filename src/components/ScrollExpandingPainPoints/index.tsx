import { Fade } from "react-awesome-reveal";
import {
  CardBody,
  Card,
  CardList,
  CardText,
  CardTitle,
  Eyebrow,
  Heading,
  NumberTag,
  Layout,
  Section,
  Title,
  ValueList,
  ValueItem,
  Wrapper,
} from "./styles";

type Point = {
  title: string;
  body: string;
  outcomes: string[];
};

const points: Point[] = [
  {
    title: "Leads go cold after hours",
    body: "A customer messages at 11 PM. You see it at 9 AM. They've moved on.",
    outcomes: [
      "Instant response, even when you're offline",
      "Lead details captured automatically",
      "Slots booked in real time",
    ],
  },
  {
    title: "Routine queries overwhelm your team",
    body: "FAQs, pricing, timings — repeated all day while real work piles up.",
    outcomes: [
      "Handles FAQs and follow-ups automatically",
      "Consistent answers everytime",
      "Team focuses only on what needs a human",
    ],
  },
  {
    title: "Every customer starts from zero",
    body: "No memory of past visits, preferences, or conversations — every interaction feels like the first.",
    outcomes: [
      "Agent remembers past preferences",
      "Personalised responses based on history",
      "Follow-ups that feel human, not generic",
    ],
  },
  {
    title: "Human Hand offs breaks the experience",
    body: "Customers drop off when they have to repeat context mid-conversation.",
    outcomes: [
      "Team joins any chat with full context",
      "Smooth with no friction for the customer",
      "Same conversation thread for human",
    ],
  },
];

const ScrollExpandingPainPoints = () => {
  return (
    <Section aria-labelledby="scroll-expanding-points-title">
      <Wrapper>
        <Fade triggerOnce fraction={0.2}>
          <Heading>
            <Eyebrow>Why Operon AI?  </Eyebrow>
            <Title id="scroll-expanding-points-title">
            We solve the gaps that cost you more than you think
            </Title>
          </Heading>
        </Fade>

        <Layout>
          <CardList>
            {points.map((point, idx) => (
              <Fade key={point.title} triggerOnce fraction={0.2} delay={idx * 120}>
                <Card>
                  <NumberTag>{String(idx + 1).padStart(2, "0")}</NumberTag>
                  <CardBody>
                    <CardTitle>{point.title}</CardTitle>
                    <CardText>{point.body}</CardText>
                    <ValueList>
                      {point.outcomes.map((item) => (
                        <ValueItem key={item}>{item}</ValueItem>
                      ))}
                    </ValueList>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </CardList>
        </Layout>
      </Wrapper>
    </Section>
  );
};

export default ScrollExpandingPainPoints;
