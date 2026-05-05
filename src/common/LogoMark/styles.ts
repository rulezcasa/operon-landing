import styled from "styled-components";

export const LogoAccent = styled.span`
  color: var(--accent);
  font-weight: 700;
`;

export const LogoMarkWrap = styled.span<{ $size: "md" | "sm" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $size }) => ($size === "md" ? "0.55em" : "0.42em")};
  padding: ${({ $size }) => ($size === "md" ? "0.55rem 1.05rem" : "0.42rem 0.85rem")};
  font-family: var(--font-mono-ui);
  font-size: ${({ $size }) => ($size === "md" ? "1.125rem" : "0.9375rem")};
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(248, 250, 252, 0.96);
  line-height: 1.2;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 3px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.055) 0%,
    rgba(255, 255, 255, 0.02) 50%,
    rgba(34, 211, 238, 0.04) 100%
  );
  box-shadow:
    0 0 0 1px rgba(34, 211, 238, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 0 0 0 1px rgba(167, 139, 250, 0.12),
    0 6px 28px rgba(0, 0, 0, 0.35);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    color 0.25s ease;

  a:hover &,
  a:focus-visible & {
    border-color: rgba(34, 211, 238, 0.45);
    box-shadow:
      0 0 0 1px rgba(34, 211, 238, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 0 0 1px rgba(167, 139, 250, 0.22),
      0 0 32px rgba(34, 211, 238, 0.15);
  }
`;
