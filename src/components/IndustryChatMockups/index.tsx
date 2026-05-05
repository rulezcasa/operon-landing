import { Fade } from "react-awesome-reveal";
import {
  Section,
  Inner,
  Grid,
  Column,
  CategoryLabel,
  Phone,
  TopBar,
  Avatar,
  TopBarName,
  TopBarSub,
  Msgs,
  BubbleIn,
  BubbleOut,
  AgentBlock,
  AgentLabel,
  Timestamp,
  InputBar,
  InputFake,
  SendBtn,
  VisuallyHidden,
} from "./styles";

type Turn =
  | { kind: "user_in"; text: string; time: string }
  | { kind: "user_out"; text: string; time: string }
  | { kind: "agent"; text: string; time: string };

type Scenario = {
  label: string;
  name: string;
  sub: string;
  turns: Turn[];
};

const scenarios: Scenario[] = [
  {
    label: "Salon · appointment booking",
    name: "Glow Studio",
    sub: "",
    turns: [
      {
        kind: "user_in",
        text: "Hi, any slots for a haircut this Saturday?",
        time: "10:14 AM",
      },
      {
        kind: "agent",
        text: "Hey Anika! We have 10 AM, 1 PM, and 3:30 PM this Saturday. Any of these work?",
        time: "10:14 AM",
      },
      { kind: "user_out", text: "1 PM please", time: "10:15 AM" },
      {
        kind: "agent",
        text: "Booked! Saturday 1 PM, haircut with Meera. You'll get a reminder the morning of.",
        time: "10:15 AM",
      },
      { kind: "user_out", text: "Perfect, thanks!", time: "10:16 AM" },
      {
        kind: "agent",
        text: "See you Saturday! Feel free to message if anything changes.",
        time: "10:16 AM",
      },
    ],
  },
  {
    label: "Clinic · consultation enquiry",
    name: "MedPoint Clinic",
    sub: "",
    turns: [
      {
        kind: "user_in",
        text: "Hi, I need to see a general physician. Do I need to book in advance?",
        time: "2:10 PM",
      },
      {
        kind: "agent",
        text: "Yes, we recommend booking ahead — walk-ins can wait up to 2 hrs. Dr. Kapoor has slots tomorrow at 10 AM and 12 PM. Shall I book one?",
        time: "2:10 PM",
      },
      {
        kind: "user_out",
        text: "10 AM works. Also does the clinic accept insurance?",
        time: "2:11 PM",
      },
      {
        kind: "agent",
        text: "Yes — we accept Star Health, Niva Bupa, and HDFC Ergo. Please carry your card. Booking you for tomorrow 10 AM with Dr. Kapoor now.",
        time: "2:11 PM",
      },
      { kind: "user_out", text: "Great, thank you", time: "2:12 PM" },
      {
        kind: "agent",
        text: "Confirmed! See you tomorrow at 10 AM. Arrive 10 mins early for registration.",
        time: "2:12 PM",
      },
    ],
  },
  {
    label: "Retail · order & stock query",
    name: "Nest Home Store",
    sub: "",
    turns: [
      {
        kind: "user_in",
        text: "Hey, do you have the linen bedsheet set in queen size? Seen it on your insta",
        time: "6:45 PM",
      },
      {
        kind: "agent",
        text: "Hi Sneha! Yes, the linen set is in stock in queen size — available in Ivory, Sage, and Dusty Rose. Which colour were you thinking?",
        time: "6:45 PM",
      },
      {
        kind: "user_out",
        text: "Sage please. What's the price and can I get it delivered?",
        time: "6:46 PM",
      },
      {
        kind: "agent",
        text: "Sage queen set is ₹2,499. We deliver across Bangalore in 2–3 days, free above ₹1,999. Want me to place the order?",
        time: "6:46 PM",
      },
      {
        kind: "user_out",
        text: "Yes go ahead, same address as last time",
        time: "6:47 PM",
      },
      {
        kind: "agent",
        text: "Order placed! Sage linen queen set, arriving in 2–3 days. You'll get a tracking link once it ships.",
        time: "6:47 PM",
      },
    ],
  },
];

function UserIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
        stroke="#64748b"
        strokeWidth="2"
      />
      <circle cx="12" cy="7" r="4" stroke="#64748b" strokeWidth="2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#5b6578" aria-hidden>
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
  );
}

function TurnBubble({ turn }: { turn: Turn }) {
  if (turn.kind === "user_in") {
    return (
      <BubbleIn>
        {turn.text}
        <Timestamp>{turn.time}</Timestamp>
      </BubbleIn>
    );
  }
  if (turn.kind === "user_out") {
    return (
      <BubbleOut>
        {turn.text}
        <Timestamp>{turn.time}</Timestamp>
      </BubbleOut>
    );
  }
  return (
    <AgentBlock>
      <AgentLabel>AI Agent</AgentLabel>
      <BubbleIn>
        {turn.text}
        <Timestamp>{turn.time}</Timestamp>
      </BubbleIn>
    </AgentBlock>
  );
}

const IndustryChatMockups = () => (
  <Section aria-labelledby="industry-chat-mockups-title">
      <VisuallyHidden id="industry-chat-mockups-title">
        Three dark chat mockups: salon appointment booking, clinic enquiry, and
        retail order support
      </VisuallyHidden>
      <Inner>
        <Grid>
          {scenarios.map((s, idx) => (
            <Fade key={s.label} triggerOnce fraction={0.2} delay={idx * 120}>
              <Column>
                <CategoryLabel>{s.label}</CategoryLabel>
                <Phone>
                  <TopBar>
                    <Avatar>
                      <UserIcon />
                    </Avatar>
                    <div>
                      <TopBarName>{s.name}</TopBarName>
                      <TopBarSub>{s.sub}</TopBarSub>
                    </div>
                  </TopBar>
                  <Msgs>
                    {s.turns.map((turn, i) => (
                      <TurnBubble key={`${s.label}-${i}`} turn={turn} />
                    ))}
                  </Msgs>
                  <InputBar>
                    <InputFake>Message</InputFake>
                    <SendBtn>
                      <SendIcon />
                    </SendBtn>
                  </InputBar>
                </Phone>
              </Column>
            </Fade>
          ))}
        </Grid>
      </Inner>
    </Section>
);

export default IndustryChatMockups;
