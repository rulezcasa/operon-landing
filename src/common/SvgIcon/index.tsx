import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const imageSrc = src.startsWith("/") ? src : `/img/svg/${src}`;

  return <img src={imageSrc} alt={src} width={width} height={height} />;
};
