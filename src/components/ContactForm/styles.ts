import styled from "styled-components";

export const ContactContainer = styled("div")`
  position: relative;
  padding: 6rem 0 4rem;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    transform: translateX(-50%);
    background: #ffffff;
    z-index: -1;
    pointer-events: none;
  }

  label {
    color: #111827;
    font-size: 1.0625rem;
  }

  input,
  textarea {
    background: #ffffff;
    border: 1px solid #d1d5db;
    color: #111827;
    box-shadow: none;
    font-size: 1rem;

    &::placeholder {
      color: #6b7280;
      font-size: 1rem;
    }

    :focus-within {
      background: #ffffff;
      border-color: #111827;
      box-shadow: 0 0 0 1px rgba(17, 24, 39, 0.1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    width: min(90vw, 720px);
    height: 70%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(17, 24, 39, 0.05) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media only screen and (max-width: 1024px) {
    padding: 4.5rem 0 3rem;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: #dc2626;
  height: 0.775rem;
  padding: 0 0.675rem;
  text-shadow: none;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  button {
    background: #000000;
    color: #ffffff;
  }

  button:hover,
  button:active {
    background: #111111;
    color: #ffffff;
  }

  button:focus-visible {
    outline: 2px solid #000000;
  }

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
