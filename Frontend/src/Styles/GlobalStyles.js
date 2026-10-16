import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap');
  :root {
    color-scheme: light;
    --setsu-forest: #163b32;
    --setsu-forest-deep: #0d2923;
    --setsu-forest-soft: #28574a;
    --setsu-cream: #f8f5ee;
    --setsu-paper: #fffefa;
    --setsu-gold: #c8a96a;
    --setsu-coral: #d46f54;
    --setsu-ink: #202b26;
    --setsu-muted: #758078;
    --setsu-line: #e8e3d8;
    --setsu-shadow: 0 22px 60px rgba(20, 43, 34, .10);
    --setsu-radius: 24px;
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 100px; }
  body { margin: 0; min-width: 320px; width: 100%; color: var(--setsu-ink); background: var(--setsu-cream); font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: clip; }
  body, button, input, select, textarea { font-family: 'DM Sans', sans-serif; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { font: inherit; }
  a { color: inherit; }
  img { display: block; max-width: 100%; }
  h1, h2, h3, h4 { font-family: 'Playfair Display', Georgia, serif; color: var(--setsu-forest-deep); }
  p { line-height: 1.65; }
  ::selection { background: rgba(200,169,106,.35); color: var(--setsu-forest-deep); }
  :focus-visible { outline: 3px solid var(--setsu-gold); outline-offset: 3px; }
  #root { min-height: 100vh; }
  main, section { min-width: 0; }
  button { transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease; }
  button:not(:disabled):hover { filter: brightness(1.03); }
  button:not(:disabled):active { transform: translateY(1px); }
  .backgroundBody { pointer-events: none; opacity: .035 !important; filter: saturate(.4); }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; } }
`;

export const PrincipalContainer = styled.main`
  width: 100%; min-height: 70vh; margin: 0 auto;
  padding: clamp(100px, 11vh, 130px) clamp(18px, 5vw, 80px) 76px;
  display: flex; flex-direction: column; align-items: center; gap: clamp(28px, 5vw, 64px);
  @media (max-width: 600px) { padding: 90px 16px 48px; gap: 36px; }
`;
