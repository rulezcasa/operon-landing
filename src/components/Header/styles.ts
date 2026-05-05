import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.85rem 0.5rem;
  background: rgba(6, 8, 14, 0.72);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35);

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus-visible {
    text-decoration: none;
    color: inherit;
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: rgba(148, 163, 184, 0.95);
    transition: fill 0.25s ease;
  }

  &:hover svg {
    fill: rgba(248, 250, 252, 0.95);
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-family: var(--font-mono-ui);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: center;
  color: rgba(248, 250, 252, 0.92);
`;

export const CustomNavLinkSmall = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 1.35rem;
  color: rgba(248, 250, 252, 0.92);
  transition: opacity 0.2s ease;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: rgba(226, 232, 240, 0.55);
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;
