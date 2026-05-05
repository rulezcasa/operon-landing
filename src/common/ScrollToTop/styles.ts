import styled from "styled-components";

export const ScrollUpContainer = styled("div")<{
  show: boolean;
}>`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  text-align: center;
  align-items: center;
  border-radius: 12px;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;

  background: rgba(12, 14, 22, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);

  &:hover,
  &:active,
  &:focus {
    background: rgba(34, 211, 238, 0.15);
    border-color: rgba(34, 211, 238, 0.45);
    box-shadow: 0 0 28px rgba(34, 211, 238, 0.25);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;
