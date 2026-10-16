import styled from "styled-components";
export const PiecesContainer = styled.div`
  width: 100%; max-width: 1320px; display: flex; flex-direction: column; gap: 34px;
  .menu-intro { max-width: 790px; margin: 0 auto; text-align: center; }
  .eyebrow { color: #b4864f; font-size: .7rem; font-weight: 800; letter-spacing: .2em; }
  .menu-intro h1 { margin: 12px 0; color: var(--setsu-forest); font-size: clamp(2.4rem, 5vw, 4.4rem); font-weight: 600; line-height: 1.05; letter-spacing: -.045em; }
  .menu-intro > p { max-width: 600px; margin: 0 auto; color: #727d74; font-size: 1rem; }
  .menu-meta { display: flex; justify-content: center; align-items: center; gap: 12px; margin-top: 20px; color: #7e887f; font-size: .78rem; }
  .menu-meta span:first-child { display: inline-flex; align-items: center; gap: 7px; }
  .menu-meta svg { color: #b4864f; }
  .menu-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 22px 0 18px; border-top: 1px solid var(--setsu-line); border-bottom: 1px solid var(--setsu-line); }
  .toolbar-copy { display: flex; flex-direction: column; gap: 5px; }
  .toolbar-copy strong { color: var(--setsu-forest); font-family: 'Playfair Display', Georgia, serif; font-size: 1.7rem; }
  .toolbar-copy span { color: #828b83; font-size: .78rem; }
  .search-box { display: flex; align-items: center; gap: 10px; width: min(400px, 100%); min-height: 48px; padding: 0 15px; border: 1px solid #dedfd5; border-radius: 999px; background: #fffefa; color: #78847b; }
  .search-box input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--setsu-ink); font-size: .82rem; }
  .search-box input::placeholder { color: #a0a69f; }
  .search-box button { border: 0; background: transparent; color: #6d796f; font-size: 1.3rem; cursor: pointer; }
  .state-message { padding: 30px; text-align: center; color: #6e7c72; }
  .state-message.error { color: #b64e3f; }
  @media(max-width:650px) { gap: 24px; .menu-toolbar { align-items: stretch; flex-direction: column; gap: 14px; } .search-box { width: 100%; } .menu-meta { flex-wrap: wrap; } }
`;
export const CardsContainerPieces = styled.div`
  display: flex; flex-direction: column; gap: 38px; width: 100%;
  .categoryBlock { display: flex; flex-direction: column; gap: 18px; width: 100%; }
  .category-heading { display: flex; align-items: center; gap: 12px; }
  .category-mark { width: 5px; height: 28px; border-radius: 5px; background: var(--setsu-gold); }
  .category-heading h2 { margin: 0; color: var(--setsu-forest); font-size: clamp(1.6rem, 3vw, 2.15rem); font-weight: 600; }
  .category-count { margin-left: auto; color: #8b938b; font-size: .75rem; }
  .cardsCategory { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
  @media(max-width:1000px) { .cardsCategory { grid-template-columns: repeat(2,minmax(0,1fr)); } }
  @media(max-width:620px) { .cardsCategory { grid-template-columns: 1fr; gap: 14px; } }
`;
export const CardPieces = styled.article`
  min-width: 0; overflow: hidden; border: 1px solid rgba(22,59,50,.08); border-radius: 20px; background: #fffefa; box-shadow: 0 8px 25px rgba(20,43,34,.035); transition: transform .25s ease, box-shadow .25s ease;
  &:hover { transform: translateY(-4px); box-shadow: 0 18px 38px rgba(20,43,34,.09); }
  .piece-image { position: relative; height: 225px; overflow: hidden; background: #e8e2d6; }
  .piece-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
  &:hover .piece-image img { transform: scale(1.04); }
  .image-chip { position: absolute; bottom: 12px; left: 12px; padding: 7px 10px; border-radius: 99px; background: rgba(255,254,250,.92); color: var(--setsu-forest); font-size: .56rem; font-weight: 800; letter-spacing: .1em; }
  .piece-copy { padding: 19px 20px 22px; }
  h3 { margin: 0 0 9px; color: var(--setsu-forest); font-size: 1.35rem; font-weight: 600; }
  p { margin: 0; }
  .description { color: #737e75; font-size: .83rem; line-height: 1.7; }
  .protein { display: flex; flex-direction: column; gap: 5px; margin-top: 17px; padding-top: 13px; border-top: 1px solid #efede6; color: #7e6b49; font-size: .8rem; }
  .protein span { color: #a2a79f; font-size: .58rem; font-weight: 800; letter-spacing: .1em; }
  @media(max-width:620px) { .piece-image { height: 240px; } }
`;
