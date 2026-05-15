import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    :root {
        --font-mono-ui: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo,
            Monaco, Consolas, monospace;
        --bg-void: #050508;
        --accent: #22d3ee;
        --accent-soft: rgba(34, 211, 238, 0.55);
        --glass-border: rgba(255, 255, 255, 0.08);
        --text-body: rgba(241, 245, 249, 0.88);
        --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    }

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    @keyframes meshGradient {
        0% { background-position: 0% 40%, 100% 60%, 20% 90%, 80% 10%; }
        50% { background-position: 100% 60%, 0% 40%, 80% 20%, 30% 80%; }
        100% { background-position: 0% 40%, 100% 60%, 20% 90%, 80% 10%; }
    }

    html {
        scroll-behavior: smooth;
    }

    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
        background: var(--bg-void);
        color: var(--text-body);
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
    }

    body::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -2;
        background:
            radial-gradient(ellipse 100% 80% at 50% -25%, rgba(99, 102, 241, 0.38), transparent 55%),
            radial-gradient(ellipse 70% 50% at 100% 15%, rgba(34, 211, 238, 0.14), transparent 50%),
            radial-gradient(ellipse 60% 45% at 0% 85%, rgba(167, 139, 250, 0.16), transparent 50%),
            linear-gradient(180deg, #070910 0%, #050508 45%, #060814 100%);
        background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;
        animation: meshGradient 22s ease-in-out infinite;
    }

    body::after {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -1;
        opacity: 0.4;
        pointer-events: none;
        background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
        background-size: 72px 72px;
        mask-image: radial-gradient(ellipse 90% 70% at 50% 35%, black 10%, transparent 72%);
    }

    @media (prefers-reduced-motion: reduce) {
        body::before {
            animation: none;
        }
    }

    a:hover {
        color: var(--accent);
    }

    input,
    textarea {
        border-radius: 12px;
        border: 1px solid var(--glass-border);
        background: rgba(10, 12, 20, 0.72);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        color: rgba(248, 250, 252, 0.95);
        transition: border-color 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo), background 0.35s var(--ease-out-expo);
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        &::placeholder {
            color: rgba(148, 163, 184, 0.65);
        }

        :focus-within {
            background: rgba(12, 14, 24, 0.88);
            box-shadow:
                0 0 0 1px rgba(34, 211, 238, 0.45),
                0 0 32px rgba(99, 102, 241, 0.22);
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Light', sans-serif;
        font-weight: 500;
        font-style: normal;
        color: #f8fafc;
        font-size: 56px;
        line-height: 1.18;
        letter-spacing: -0.02em;
        text-shadow: 0 0 48px rgba(99, 102, 241, 0.12);

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: var(--text-body);
        font-size: 21px;        
        line-height: 1.55;

        @media only screen and (max-width: 1024px) {
            font-size: 19px;
        }

        @media only screen and (max-width: 768px) {
            font-size: 17px;
        }
    }

    a {
        text-decoration: none;
        outline: none;
        color: rgba(226, 232, 240, 0.82);
        transition: color 0.25s var(--ease-out-expo), text-shadow 0.25s ease;

        :hover {
            color: var(--accent);
            text-shadow: 0 0 24px var(--accent-soft);
        }
    }

    ::selection {
        background: rgba(99, 102, 241, 0.45);
        color: #fff;
    }
    
    *:focus {
        outline: none;
    }

    .ant-drawer-content {
        background: rgba(8, 10, 16, 0.94) !important;
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border-left: 1px solid var(--glass-border) !important;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
        background: transparent;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;

        @media only screen and (max-width: 414px) {
            width: min(86vw, 300px) !important;
        }
    }

    .ant-row {
        transition: transform 0.5s var(--ease-out-expo);
    }
`;
