import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  children,
  onClick,
  type = "submit",
  disabled,
}: ButtonProps) => (
  <StyledButton onClick={onClick} type={type} disabled={disabled}>
    {children}
  </StyledButton>
);
