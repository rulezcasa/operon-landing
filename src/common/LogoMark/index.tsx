import {
  LogoAccent,
  LogoImage,
  LogoMarkRow,
  LogoMarkWrap,
} from "./styles";

type LogoMarkProps = {
  size?: "md" | "sm";
};

export const LogoMark = ({ size = "md" }: LogoMarkProps) => (
  <LogoMarkRow $size={size}>
    <LogoImage
      src="/img/logo-white.png"
      alt=""
      aria-hidden="true"
      $size={size}
    />
    <LogoMarkWrap $size={size}>
      <span>Operon</span>
      <LogoAccent>AI</LogoAccent>
    </LogoMarkWrap>
  </LogoMarkRow>
);
