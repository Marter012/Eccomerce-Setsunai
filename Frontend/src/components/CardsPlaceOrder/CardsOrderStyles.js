import styled from "styled-components";
export const ContainerCardPieces = styled.div`
  display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); align-items: stretch; gap: 18px; width: 100%;
  > p { grid-column: 1 / -1; color: #758078; }
  @media(max-width:850px) { grid-template-columns: 1fr; gap: 14px; }
`;
export const ContainerCombinedPieces = styled.div`
  display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; width: 100%;
  > p { grid-column: 1 / -1; color: #758078; }
  @media(max-width:850px) { grid-template-columns: 1fr; gap: 14px; }
`;
export const CardCombinedPieces = styled.button`
  position: relative; isolation: isolate; min-width: 0; min-height: 220px; padding: 0; overflow: hidden; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; text-align: left;
  border: 1px solid rgba(22,59,50,.1); border-radius: 22px; background: #d8d2c5; color: white; cursor: pointer; box-shadow: 0 10px 26px rgba(22,43,34,.06);
  &::before { content: ''; position: absolute; inset: 0; z-index: -2; background-image: url(${(p) => p.backImg ? `"${p.backImg}"` : 'none'}); background-size: cover; background-position: center; transition: transform .6s ease; }
  &::after { content: ''; position: absolute; inset: 0; z-index: -1; background: linear-gradient(180deg,rgba(8,26,20,.04) 10%,rgba(8,26,20,.82) 100%); }
  &:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(22,43,34,.15); }
  &:hover::before { transform: scale(1.05); }
  > p:first-of-type { margin: 0 20px 5px; color: rgba(255,255,255,.82); font-size: .76rem; line-height: 1.5; }
  h4 { margin: 0 20px 8px; color: white; font-size: clamp(1.6rem, 2.5vw, 2.3rem); font-weight: 600; line-height: 1.1; }
  > p:last-of-type { margin: 0 20px 20px; color: rgba(255,255,255,.8); font-size: .72rem; line-height: 1.5; }
  @media(max-width:600px) { min-height: 205px; border-radius: 17px; }
`;
