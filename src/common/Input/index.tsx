import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  type = "text",
}: InputProps) => (
  <Container>
    <Label htmlFor={name}>{label ?? name}</Label>
    <StyledInput
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      type={type}
      onChange={onChange}
    />
  </Container>
);

export default Input;
