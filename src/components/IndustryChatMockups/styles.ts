import styled from "styled-components";

export const VisuallyHidden = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Section = styled.section`
  position: relative;
  padding: 6rem 0 4rem;

  &::before {
    content: "";
    position: absolute;
    inset: auto 8% 12% 8%;
    height: 45%;
    max-height: 420px;
    border-radius: 32px;
    background: radial-gradient(
      ellipse at 50% 100%,
      rgba(34, 211, 238, 0.09),
      transparent 60%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media only screen and (max-width: 1024px) {
    padding: 4.5rem 0 3rem;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 380px;
    margin: 0 auto;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const CategoryLabel = styled.div`
  font-size: 0.625rem;
  letter-spacing: 0.12em;
  text-align: center;
  padding-bottom: 0.65rem;
  color: rgba(148, 163, 184, 0.65);
  font-family: "Motiva Sans Bold", serif;
  text-transform: uppercase;
`;

export const Phone = styled.div`
  background: linear-gradient(
    165deg,
    rgba(18, 18, 22, 0.98) 0%,
    rgba(10, 12, 18, 0.99) 100%
  );
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  height: 500px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35) inset,
    0 24px 56px rgba(0, 0, 0, 0.42),
    0 0 48px rgba(99, 102, 241, 0.06);
  transition:
    transform 0.45s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
    box-shadow 0.45s ease,
    border-color 0.35s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-4px);
      border-color: rgba(255, 255, 255, 0.24);
      box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.12) inset,
        0 32px 72px rgba(0, 0, 0, 0.5),
        0 0 64px rgba(255, 255, 255, 0.12);
    }
  }
`;

export const TopBar = styled.div`
  padding: 14px 16px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    transparent 100%
  );
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(30, 32, 44, 0.9);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const TopBarName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgba(248, 250, 252, 0.95);
  font-family: "Motiva Sans Bold", serif;
  letter-spacing: -0.01em;
`;

export const TopBarSub = styled.div`
  font-size: 10px;
  color: rgba(100, 116, 139, 0.95);
  margin-top: 2px;
`;

export const OnlineDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #34d399, #059669);
  margin-left: auto;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.45);
`;

export const Msgs = styled.div`
  flex: 1;
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 88%,
    transparent 100%
  );
`;

export const BubbleIn = styled.div`
  align-self: flex-start;
  max-width: 82%;
  font-size: 11px;
  line-height: 1.6;
  padding: 8px 11px;
  border-radius: 14px;
  background: rgba(28, 30, 40, 0.95);
  color: rgba(203, 213, 225, 0.92);
  border-bottom-left-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.04);
`;

export const BubbleOut = styled.div`
  align-self: flex-end;
  max-width: 82%;
  font-size: 11px;
  line-height: 1.6;
  padding: 8px 11px;
  border-radius: 14px;
  background: linear-gradient(
    145deg,
    rgba(34, 211, 238, 0.14) 0%,
    rgba(99, 102, 241, 0.12) 100%
  );
  color: rgba(226, 232, 240, 0.95);
  border-bottom-right-radius: 4px;
  border: 1px solid rgba(34, 211, 238, 0.15);
`;

export const AgentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 100%;
`;

export const AgentLabel = styled.div`
  font-size: 9px;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.06em;
  margin-bottom: 2px;
  padding-left: 1px;
  text-transform: uppercase;
  font-family: "Motiva Sans Bold", serif;
`;

export const Timestamp = styled.div`
  font-size: 9px;
  color: rgba(71, 85, 105, 0.95);
  margin-top: 3px;
  text-align: right;
`;

export const InputBar = styled.div`
  padding: 10px 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.2);
`;

export const InputFake = styled.div`
  flex: 1;
  background: rgba(20, 22, 32, 0.95);
  border-radius: 20px;
  padding: 7px 12px;
  font-size: 10px;
  color: rgba(71, 85, 105, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const SendBtn = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(34, 38, 52, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;
