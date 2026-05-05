import styled from "styled-components";

export const StyledButton = styled("button").withConfig({
  shouldForwardProp: (prop) => prop !== "color",
})<{ color?: string }>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: auto;
  max-width: 100%;
  min-width: 10.5rem;
  padding: 1.05rem 1.85rem;
  margin-top: 0.625rem;

  font-family: var(--font-mono-ui);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  background: #fff;
  color: #000;
  border: none;
  border-radius: 0;
  cursor: pointer;

  transition: background 0.2s ease, color 0.2s ease;

  &:hover,
  &:active {
    color: #000;
    background: #e8e8e8;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 3px;
  }
`;
