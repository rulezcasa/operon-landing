import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 6rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 4.5rem 0 3rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 1.75rem;
`;

export const Eyebrow = styled.p`
  margin: 0;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Motiva Sans Bold", serif;
`;

export const Title = styled.h2`
  margin: 0.65rem 0 0;
  font-size: clamp(1.6rem, 1.4rem + 0.95vw, 2.35rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

export const CardList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Layout = styled.div`
  display: block;
`;

export const Card = styled.li`
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: linear-gradient(
    165deg,
    rgba(16, 18, 24, 0.9) 0%,
    rgba(10, 11, 16, 0.95) 100%
  );
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.36);
  padding: 1.1rem 1rem 1.05rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.9rem;
  align-items: start;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: rgba(255, 255, 255, 0.22);
      box-shadow: 0 24px 54px rgba(0, 0, 0, 0.45);
    }
  }
`;

export const NumberTag = styled.div`
  min-width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-mono-ui);
  font-size: 0.84rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  min-width: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.18rem, 1.1rem + 0.35vw, 1.45rem);
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: rgba(255, 255, 255, 0.96);
  font-family: "Motiva Sans Light", sans-serif;
  font-weight: 500;
`;

export const CardText = styled.p`
  margin: 0.6rem 0 0;
  max-width: 42ch;
  font-size: clamp(0.88rem, 0.84rem + 0.16vw, 1rem);
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.84);
`;

export const ValueList = styled.ul`
  position: relative;
  margin: 1.25rem 0 0;
  padding: 0 0 0 1.25rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.28rem;
    top: 0.2rem;
    bottom: 0.2rem;
    width: 2px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.24);
  }
`;

export const ValueItem = styled.li`
  position: relative;
  padding-left: 0.8rem;
  max-width: 34ch;
  font-size: clamp(0.76rem, 0.74rem + 0.12vw, 0.86rem);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.82);

  &::before {
    content: "";
    position: absolute;
    left: -0.98rem;
    top: 0.56em;
    width: 10px;
    height: 2px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.56);
  }
`;
