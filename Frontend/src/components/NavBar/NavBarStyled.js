import styled from "styled-components";
export const NavContainer = styled.nav`
  position: fixed; inset: 0 0 auto; z-index: 1000; width: 100%; min-height: 82px; padding: 0 clamp(16px, 5vw, 76px);
  display: flex; align-items: center; justify-content: space-between; gap: 28px; color: #fffdf8;
  background: rgba(13,41,35,.96); border-bottom: 1px solid rgba(200,169,106,.35); box-shadow: 0 8px 32px rgba(13,41,35,.10); backdrop-filter: blur(18px);
  .title { display: flex; align-items: center; gap: 12px; min-width: max-content; color: inherit; text-decoration: none; }
  .title img { width: 42px; height: 50px; object-fit: contain; }
  .brand-copy { display: flex; flex-direction: column; gap: 2px; }
  .brand-copy strong { font-family: 'Playfair Display', Georgia, serif; font-size: 1.15rem; letter-spacing: .22em; line-height: 1; }
  .brand-copy small { color: #d6c29b; font-size: .53rem; letter-spacing: .17em; text-transform: uppercase; }
  @media(max-width:768px) { min-height: 70px; gap: 12px; .title img { width: 34px; height: 40px; } .brand-copy strong { font-size: 1rem; } }
`;
export const Hamburger = styled.button`
  display: none; width: 42px; height: 42px; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; background: transparent; color: white; font-size: 1.25rem; cursor: pointer;
  @media(max-width:768px) { display: inline-flex; }
`;
export const LinksContainer = styled.div`
  display: flex; align-items: center; gap: clamp(18px, 3vw, 42px);
  a { position: relative; padding: 12px 0; color: rgba(255,253,248,.76); text-decoration: none; font-size: .86rem; font-weight: 600; letter-spacing: .025em; transition: color .2s ease; }
  a:hover, a.active { color: #e6c98f; }
  a::after { content: ''; position: absolute; right: 0; bottom: 4px; left: 0; height: 2px; border-radius: 2px; background: #c8a96a; transform: scaleX(0); transform-origin: left; transition: transform .2s ease; }
  a:hover::after, a.active::after { transform: scaleX(1); }
  @media(max-width:768px) { position: absolute; top: 100%; left: 0; width: 100%; display: flex; flex-direction: column; align-items: stretch; gap: 0; padding: ${(p) => p.open ? "8px 22px 18px" : "0 22px"}; max-height: ${(p) => p.open ? "260px" : "0"}; overflow: hidden; background: #0d2923; border-bottom: ${(p) => p.open ? "1px solid rgba(200,169,106,.25)" : "0"}; opacity: ${(p) => p.open ? "1" : "0"}; transition: max-height .25s ease, padding .25s ease, opacity .2s ease; a { padding: 14px 4px; border-bottom: 1px solid rgba(255,255,255,.07); } a::after { display: none; } }
`;
export const CartIconContainer = styled.div`
  display: flex; align-items: center; justify-content: center; min-width: 48px; cursor: pointer;
  svg { color: #fffdf8; font-size: 1.55rem; transition: color .2s ease; }
  &:hover svg { color: #e6c98f; }
`;
