import { Row, Col } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
    $lightTheme ? "6rem 0 4rem" : "6rem 0 4rem"};
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme ? "50%" : "0"};
    width: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme ? "100vw" : "100%"};
    height: 100%;
    transform: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme ? "translateX(-50%)" : "none"};
    z-index: -1;
    background: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme
        ? "#ffffff"
        : "radial-gradient(ellipse 85% 55% at 50% 0%, rgba(99, 102, 241, 0.09), transparent 58%)"};
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme ? 0 : 0.35};
    background: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme
        ? "none"
        : "linear-gradient(105deg, transparent 40%, rgba(34, 211, 238, 0.04) 50%, transparent 60%)"};
    pointer-events: none;
  }

  @media only screen and (max-width: 1024px) {
    padding: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme ? "4.5rem 0 3rem" : "4.5rem 0 3rem"};
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
    $lightTheme ? "#111827" : "inherit"};
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  > h2 {
    margin: 0.65rem 0 0;
    font-size: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme
        ? "clamp(1.6rem, 1.4rem + 0.95vw, 2.35rem)"
        : "clamp(1.6rem, 1.4rem + 0.95vw, 2.35rem)"};
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: ${({ $lightTheme }: { $lightTheme?: boolean }) =>
      $lightTheme ? "#111827" : "inherit"};
  }

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const TopIcon = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 0 2rem;

  img {
    width: 88px;
    height: 88px;
    object-fit: contain;
    filter: brightness(0) saturate(100%) invert(100%) opacity(0.88);
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinBadge = styled("div")`
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.18);
  border-radius: 6px;
  background: #ffffff;
  padding: 0.85rem 1rem;
  box-shadow: 0 10px 24px rgba(2, 6, 23, 0.12);
`;

export const MinTitle = styled("h3")`
  margin: 0;
  font-size: clamp(1.15rem, 0.95rem + 0.9vw, 1.75rem);
  line-height: 1.15;
  text-transform: none;
  letter-spacing: 0.01em;
  white-space: normal;
  word-break: break-word;
  text-align: center;
  color: #111111;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
`;

export const MinPara = styled("p")`
  margin: 0.6rem 0 0;
  font-size: 13px;
  color: #111111;
  line-height: 1.5;
  width: 100%;
  text-align: center;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 0;
  }

  @media only screen and (max-width: 575px) {
    justify-content: center;

    button {
      width: 100%;
      min-width: 0;
    }
  }
`;

export const IllustrationCol = styled(Col)`
  img {
    filter: drop-shadow(0 28px 56px rgba(99, 102, 241, 0.22));
    transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
      filter 0.5s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover img {
      transform: translateY(-8px) scale(1.02);
      filter: drop-shadow(0 36px 64px rgba(34, 211, 238, 0.18));
    }
  }
`;

export const ChannelMarquee = styled("div")`
  position: relative;
  margin-top: 4.2rem;
  width: 58%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border-radius: 0;
  border: 0;
  background: rgba(4, 6, 12, 0.95);

  @media only screen and (max-width: 1024px) {
    width: min(78vw, 560px);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 48px;
    pointer-events: none;
    z-index: 1;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(4, 6, 12, 1) 0%,
      rgba(4, 6, 12, 0) 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(4, 6, 12, 1) 0%,
      rgba(4, 6, 12, 0) 100%
    );
  }
`;

export const ChannelTrack = styled("div")`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: max-content;
  padding: 1.1rem 1rem;
  animation: channelScroll 18s linear infinite;

  @keyframes channelScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export const ChannelLogoItem = styled("span")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 52px;
  padding: 0;
  background: transparent;
  border: 0;

  img {
    width: auto;
    height: 36px;
    opacity: 0.92;
    filter: brightness(0) invert(1);
  }
`;

export const CallsItem = styled("span")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 118px;
  height: 52px;
  background: transparent;
  border: 0;
  color: rgba(226, 232, 240, 0.62);
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-transform: none;
`;
