import styled from "styled-components";

export const Board = styled.div`
  width: min(960px, 100%);
  min-height: 400px;
  border-radius: 20px;
  padding: 1.3rem;
  font-family: var(--font-mono-ui);
  display: flex;
  align-items: center;
  background: linear-gradient(
    165deg,
    rgba(15, 18, 28, 0.95) 0%,
    rgba(8, 10, 17, 0.96) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.46),
    inset 0 0 0 1px rgba(255, 255, 255, 0.03);
`;

export const Grid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1rem;

  @media only screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Stack = styled.div`
  display: grid;
  gap: 0.8rem;
`;

export const RightStack = styled(Stack)`
  position: relative;

  @media only screen and (min-width: 981px) {
    &::before {
      content: "";
      position: absolute;
      left: -1.05rem;
      top: 1.35rem;
      bottom: 1.35rem;
      width: 1px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.34) 30%,
        rgba(255, 255, 255, 0.34) 70%,
        rgba(255, 255, 255, 0.08)
      );
    }
  }
`;

export const Block = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.78rem 0.95rem;
  text-align: ${({ $centered }: { $centered?: boolean }) =>
    $centered ? "center" : "left"};
`;

export const Label = styled.p`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.25;
  color: rgba(241, 245, 249, 0.78);
`;

export const CenterVault = styled(Block)`
  min-height: 145px;
  display: grid;
  place-items: center;
  text-align: center;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.015)
  );
`;

export const VaultTitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: rgba(248, 250, 252, 0.9);
`;

export const VaultSub = styled.p`
  margin: 0.45rem 0 0;
  font-size: 0.82rem;
  color: rgba(148, 163, 184, 0.82);
`;

export const Item = styled(Block)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.62rem;

  @media only screen and (min-width: 981px) {
    &::before {
      content: "";
      position: absolute;
      left: -1.05rem;
      top: 50%;
      width: 0.95rem;
      height: 1px;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 0 0 5.5px rgba(255, 255, 255, 0.1);
`;
