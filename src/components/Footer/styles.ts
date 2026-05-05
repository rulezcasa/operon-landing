import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgba(8, 10, 16, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.5rem 0;
  box-shadow: 0 -32px 80px rgba(0, 0, 0, 0.35);
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: rgba(248, 250, 252, 0.92);

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  color: rgba(203, 213, 225, 0.78);
  transition: color 0.25s ease, text-shadow 0.25s ease;

  &:hover,
  &:active,
  &:focus {
    color: #22d3ee;
    text-shadow: 0 0 20px rgba(34, 211, 238, 0.35);
  }
`;

export const Extra = styled("section")`
  background: rgba(5, 6, 10, 0.85);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Copyright = styled("p")`
  margin: 0;
  font-size: 0.95rem;
  color: rgba(148, 163, 184, 0.86);
  text-align: right;

  @media only screen and (max-width: 768px) {
    text-align: left;
    margin-top: 1rem;
  }
`;

export const Para = styled("div")`
  color: rgba(148, 163, 184, 0.88);
  font-size: 14px;
  width: 70%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 40ch;
  }
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: rgba(226, 232, 240, 0.88);
  cursor: pointer;
  transition: color 0.25s ease, text-decoration-color 0.25s ease, text-shadow 0.25s ease;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  max-width: max-content;

  &:hover {
    color: #22d3ee;
    text-underline-position: under;
    text-decoration: rgba(34, 211, 238, 0.75) wavy underline;
    text-shadow: 0 0 22px rgba(34, 211, 238, 0.35);
  }
`;

export const Chat = styled("p")`
  color: rgba(226, 232, 240, 0.88);
  max-width: fit-content;
  border-bottom: 1px solid rgba(34, 211, 238, 0.45);
  cursor: pointer;
  margin-top: 1rem;
  transition: color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-bottom: 1px solid rgba(167, 139, 250, 0.75);
    color: #a78bfa;
    box-shadow: 0 8px 28px rgba(167, 139, 250, 0.12);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.65));
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: rgba(248, 250, 252, 0.92);

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: rgba(248, 250, 252, 0.88);
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
