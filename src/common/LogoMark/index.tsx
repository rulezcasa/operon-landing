import { LogoAccent, LogoMarkWrap } from "./styles";

type LogoMarkProps = {
  size?: "md" | "sm";
};

export const LogoMark = ({ size = "md" }: LogoMarkProps) => (
  <LogoMarkWrap $size={size}>
    <span>Operon</span>
    <LogoAccent>AI</LogoAccent>
  </LogoMarkWrap>
);
