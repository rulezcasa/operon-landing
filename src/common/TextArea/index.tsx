import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({
  name,
  label,
  placeholder,
  onChange,
  value,
}: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{label ?? name}</Label>
    <StyledTextArea
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  </StyledContainer>
);

export default TextArea;
