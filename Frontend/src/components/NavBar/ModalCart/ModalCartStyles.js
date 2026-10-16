import styled from "styled-components";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

export const ContainerModalCart = styled.aside`
  position: fixed; z-index: 1200; top: 0; right: 0; width: min(520px, 100%); height: 100dvh; display: flex; align-items: stretch; justify-content: center;
  background: var(--setsu-paper); box-shadow: -24px 0 70px rgba(8,28,22,.2); transform: translateX(${(p) => p.$activeCart ? "0" : "105%"}); visibility: ${(p) => p.$activeCart ? "visible" : "hidden"}; transition: transform .32s cubic-bezier(.2,.75,.2,1), visibility .32s;
  @media(max-width:520px) { width: 100%; }
`;
export const SectionModalCart = styled.div`
  display: flex; flex-direction: column; width: 100%; height: 100%; min-height: 0; background: #fffefa; color: var(--setsu-ink);
  .title { position: relative; flex-shrink: 0; display: flex; align-items: center; justify-content: space-between; min-height: 98px; padding: 24px 28px 18px; border-bottom: 1px solid var(--setsu-line); }
  .title .heading { display: flex; flex-direction: column; gap: 4px; }
  .title .eyebrow { margin: 0; color: #b4864f; font-size: .65rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
  h4 { margin: 0; color: var(--setsu-forest); font-size: 2rem; line-height: 1.1; }
  .header-actions { display: flex; align-items: center; gap: 8px; }
  @media(max-width:520px) { .title { min-height: 84px; padding: 18px 20px; } h4 { font-size: 1.7rem; } }
`;
export const CartDeleteIcon = styled(MdDeleteSweep)`
  position: static; color: #a5aaa4; font-size: 1.35rem; cursor: pointer; transition: color .2s ease;
  &:hover { color: #c45f4b; }
`;
export const CartCloseIcon = styled(IoMdCloseCircle)`
  position: static; color: #718078; font-size: 1.65rem; cursor: pointer; transition: color .2s ease;
  &:hover { color: var(--setsu-forest); }
`;
export const CardsCart = styled.div`
  flex: 1; min-height: 0; width: 100%; display: flex; flex-direction: column; gap: 0; padding: 8px 24px 20px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #d8d1c4 transparent;
  .empty-cart { display: flex; flex: 1; min-height: 250px; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #79847c; }
  .empty-cart .empty-icon { display: grid; place-items: center; width: 72px; height: 72px; margin-bottom: 18px; border-radius: 50%; background: #f2efe7; color: var(--setsu-forest); font-size: 1.7rem; }
  .empty-cart strong { color: var(--setsu-forest); font-family: 'Playfair Display', Georgia, serif; font-size: 1.4rem; }
  .empty-cart p { margin: 8px 0 0; font-size: .86rem; }
  @media(max-width:520px) { padding: 8px 16px 16px; }
`;
export const CardCart = styled.article`
  display: grid; grid-template-columns: 88px minmax(0,1fr) auto; align-items: start; gap: 13px; padding: 18px 0; border-bottom: 1px solid var(--setsu-line);
  > img { width: 88px !important; height: 88px !important; position: static !important; object-fit: cover; opacity: 1 !important; border-radius: 13px; background: #eee8dc; }
  .dataProduct { min-width: 0; display: flex; flex-direction: column; gap: 5px; }
  .dataProduct h4 { width: 100%; color: var(--setsu-forest); font-family: 'DM Sans', sans-serif; font-size: .88rem; font-weight: 800; text-align: left; line-height: 1.4; }
  .dataProduct p { width: 100%; display: block; margin: 0; color: #788279; font-size: .7rem; line-height: 1.45; text-align: left; }
  .item-price { margin: 0; color: var(--setsu-forest); font-size: .9rem; font-weight: 800; white-space: nowrap; }
  .quantity-wrap { grid-column: 2 / 4; display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 2px; }
  .quantity-wrap .unit-price { color: #858e85; font-size: .72rem; }
  @media(max-width:380px) { grid-template-columns: 68px minmax(0,1fr); > img { width: 68px !important; height: 68px !important; } .item-price { grid-column: 2; } .quantity-wrap { grid-column: 2; } }
`;
export const TotalCart = styled.div`
  flex-shrink: 0; display: flex; flex-direction: column; gap: 13px; padding: 20px 28px calc(22px + env(safe-area-inset-bottom)); background: #f7f4ed; border-top: 1px solid var(--setsu-line);
  .total-line { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
  .total-line span { color: #69766d; font-size: .9rem; }
  .total-line strong { color: var(--setsu-forest); font-size: 1.55rem; }
  .checkout-note { margin: 0; color: #828b83; font-size: .72rem; line-height: 1.5; }
  button { width: 100%; min-height: 54px; display: flex; align-items: center; justify-content: center; gap: 10px; border: 0; border-radius: 999px; background: var(--setsu-forest); color: white; font-size: .9rem; font-weight: 800; cursor: pointer; }
  button:hover:not(:disabled) { background: var(--setsu-forest-deep); box-shadow: 0 9px 20px rgba(22,59,50,.16); }
  button:disabled { background: #c6cbc5; cursor: not-allowed; }
  @media(max-width:520px) { padding: 17px 20px calc(18px + env(safe-area-inset-bottom)); }
`;
