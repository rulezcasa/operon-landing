import styled from "styled-components";

export const LogoAccent = styled.span`
  color: var(--accent);
  font-weight: 700;
`;

export const LogoMarkRow = styled.span<{ $size: "md" | "sm" }>`
  display: inline-flex;
  align-items: center;
  gap: 0;
`;

export const LogoImage = styled.img<{ $size: "md" | "sm" }>`
  height: ${({ $size }) => ($size === "md" ? "6rem" : "4.9rem")};
  width: auto;
  display: block;
  padding: 0;
  /* Negative right margin pulls the box flush to the visible logo edge,
     compensating for the transparent padding baked into the PNG. */
  margin: ${({ $size }) =>
    $size === "md" ? "0 -1.8rem 0 -0.92rem" : "0 -1.47rem 0 -0.76rem"};
  opacity: 0.8;
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.25));

  @media only screen and (max-width: 768px) {
    height: ${({ $size }) => ($size === "md" ? "5.1rem" : "4.35rem")};
    margin: ${({ $size }) =>
      $size === "md" ? "0 -1.55rem 0 -0.78rem" : "0 -1.28rem 0 -0.65rem"};
  }

  @media only screen and (max-width: 480px) {
    height: ${({ $size }) => ($size === "md" ? "4.5rem" : "3.85rem")};
    margin: ${({ $size }) =>
      $size === "md" ? "0 -1.34rem 0 -0.65rem" : "0 -1.1rem 0 -0.56rem"};
  }

  @media only screen and (max-width: 360px) {
    height: ${({ $size }) => ($size === "md" ? "3.9rem" : "3.35rem")};
    margin: ${({ $size }) =>
      $size === "md" ? "0 -1.15rem 0 -0.56rem" : "0 -0.95rem 0 -0.48rem"};
  }
`;

export const LogoMarkWrap = styled.span<{ $size: "md" | "sm" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $size }) => ($size === "md" ? "0.55em" : "0.42em")};
  padding: ${({ $size }) => ($size === "md" ? "0.5rem 1rem" : "0.4rem 0.8rem")};
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

  @media only screen and (max-width: 768px) {
    font-size: ${({ $size }) => ($size === "md" ? "1rem" : "0.875rem")};
    padding: ${({ $size }) => ($size === "md" ? "0.4rem 0.85rem" : "0.32rem 0.7rem")};
  }

  @media only screen and (max-width: 480px) {
    font-size: ${({ $size }) => ($size === "md" ? "0.9375rem" : "0.8125rem")};
    padding: ${({ $size }) => ($size === "md" ? "0.35rem 0.7rem" : "0.28rem 0.6rem")};
    letter-spacing: 0.12em;
  }

  @media only screen and (max-width: 360px) {
    font-size: ${({ $size }) => ($size === "md" ? "0.875rem" : "0.75rem")};
    padding: ${({ $size }) => ($size === "md" ? "0.3rem 0.6rem" : "0.25rem 0.55rem")};
  }

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
