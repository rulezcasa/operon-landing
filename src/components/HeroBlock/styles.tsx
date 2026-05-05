import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 6rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 18% 12% auto 12%;
    height: 62%;
    border-radius: 28px;
    background: radial-gradient(
      ellipse at 50% 0%,
      rgba(99, 102, 241, 0.2),
      transparent 65%
    );
    filter: blur(2px);
    pointer-events: none;
    z-index: 0;
  }

  @media screen and (max-width: 1024px) {
    padding: 4.5rem 0 3rem;
  }
`;

export const HeroLayout = styled("div")`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  padding: 0 1.25rem;
  display: grid;
  grid-template-columns: minmax(180px, 1fr) minmax(0, 700px) minmax(180px, 1fr);
  gap: 1.25rem;
  align-items: stretch;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr);
    max-width: 740px;
    gap: 0.875rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const SideVideo = styled("video")`
  width: 100%;
  height: 100%;
  min-height: 360px;
  border-radius: 24px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.35),
    0 0 80px rgba(99, 102, 241, 0.12);
  opacity: 0.95;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  z-index: 2;
  max-width: 700px;
  width: 100%;
  padding: 2.75rem 2.25rem 2.5rem;
  border-radius: 24px;
  background: rgba(12, 14, 22, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.2) inset,
    0 32px 80px rgba(0, 0, 0, 0.45),
    0 0 100px rgba(99, 102, 241, 0.08);
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow:
        0 0 0 1px rgba(34, 211, 238, 0.12) inset,
        0 40px 100px rgba(0, 0, 0, 0.5),
        0 0 120px rgba(34, 211, 238, 0.12);
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 2rem 1.25rem;
  }
`;
