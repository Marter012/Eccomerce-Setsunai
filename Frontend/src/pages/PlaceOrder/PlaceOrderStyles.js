import styled from "styled-components";
export const PlaceOrderContainer = styled.div`
  display: flex; flex-direction: column; width: 100%; max-width: 1320px; gap: 30px;
  .order-intro { max-width: 850px; margin: 0 auto; text-align: center; }
  .eyebrow { color: #b4864f; font-size: .68rem; font-weight: 800; letter-spacing: .19em; }
  .order-intro h1 { margin: 12px 0; color: var(--setsu-forest); font-size: clamp(2.5rem, 5vw, 4.4rem); line-height: 1.06; letter-spacing: -.045em; font-weight: 600; }
  .order-intro > p { max-width: 650px; margin: 0 auto; color: #758078; font-size: .96rem; }
  .order-steps { display: flex; justify-content: center; align-items: center; gap: 17px; margin-top: 25px; color: #7d887f; font-size: .72rem; }
  .order-steps span { display: inline-flex; align-items: center; gap: 7px; }
  .order-steps b { display: grid; place-items: center; width: 25px; height: 25px; border-radius: 50%; background: #e8e1d2; color: var(--setsu-forest); font-size: .62rem; }
  .order-steps svg { color: #b4864f; font-size: .9rem; }
  .order-search { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 48px; padding: 0 15px; border: 1px solid #dedfd5; border-radius: 14px; background: #fffefa; color: #78847b; }
  .order-search input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--setsu-ink); font-size: .84rem; }
  .order-search input::placeholder { color: #a0a69f; }
  .order-search button { border: 0; background: transparent; color: #6d796f; font-size: 1.3rem; cursor: pointer; }
  .section-caption { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 5px 0 0; }
  .section-caption > div { display: flex; align-items: center; gap: 13px; }
  .section-icon { display: grid; place-items: center; width: 45px; height: 45px; border-radius: 14px; background: #e9e5d8; color: var(--setsu-forest); font-size: 1.2rem; }
  .section-caption h2 { margin: 0 0 4px; color: var(--setsu-forest); font-size: 1.65rem; }
  .section-caption p { margin: 0; color: #7d877e; font-size: .78rem; }
  .made-to-order { padding: 8px 12px; border-radius: 99px; background: #e8eee5; color: #486d58; font-size: .68rem; font-weight: 700; white-space: nowrap; }
  @media(max-width:700px) { gap: 23px; .order-steps { flex-wrap: wrap; gap: 9px 12px; } .order-steps svg { display: none; } .section-caption { align-items: flex-start; flex-direction: column; } .section-caption h2 { font-size: 1.4rem; } }
`;
export const SelectButtonsMenu = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: min(620px, 100%); margin: 0 auto; padding: 6px; border: 1px solid #e3e0d6; border-radius: 18px; background: #eeeae1;
  button { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; min-height: 70px; padding: 12px; border: 1px solid transparent; border-radius: 13px; background: transparent; color: #778078; cursor: pointer; }
  button span { font-size: .9rem; font-weight: 800; }
  button small { font-size: .68rem; font-weight: 500; }
  button.selected { border-color: #e7e4dc; background: #fffefa; color: var(--setsu-forest); box-shadow: 0 4px 14px rgba(24,44,35,.06); }
  @media(max-width:480px) { button { min-height: 66px; } button span { font-size: .78rem; } button small { font-size: .62rem; } }
`;
export const PlaceOrderPieces = styled.div`
  width: 100%; min-height: 40vh; display: flex; flex-direction: column; gap: 16px; align-items: stretch; text-align: center;
`;
export const PlaceOrderCart = styled.div``;
