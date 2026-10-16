import { motion } from "framer-motion";
import styled from "styled-components";
export const ModalContainerCP = styled(motion.div)`
  position: fixed; z-index: 1100; top: 50%; left: 50%; transform: translate(-50%,-50%); width: min(900px, calc(100% - 32px)); max-height: min(88dvh, 900px); overflow-y: auto; display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 22px 20px 0; border: 1px solid #e3ddcf; border-radius: 24px; background: #fbf9f3; box-shadow: 0 28px 90px rgba(5,22,16,.32);
  h2 { width: 100%; margin: 0; padding: 4px 0 8px; color: var(--setsu-forest); font-size: clamp(1.8rem,4vw,2.6rem); font-weight: 600; text-align: left; }
  @media(max-width:600px) { width: calc(100% - 18px); max-height: 92dvh; padding: 16px 12px 0; border-radius: 19px; gap: 10px; h2 { font-size: 1.8rem; } }
`;
export const ModalCardCombinedPieces = styled.div`
  width: 100%; flex-shrink: 0; display: flex; flex-direction: column; gap: 11px; padding: 15px; border: 1px solid #e7e3d8; border-radius: 16px; background: #fffefa;
  opacity: ${(p) => p.$disabled ? .48 : 1}; pointer-events: ${(p) => p.$disabled ? "none" : "auto"};
  p, h4 { margin: 0; }
  .discount { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; }
  .priceRow { display: flex; align-items: center; gap: 8px; }
  .finalPrice { color: var(--setsu-forest); font-size: 1.45rem; font-weight: 800; }
  .discountPercent { padding: 3px 7px; border-radius: 99px; background: #f8e9e2; color: #b7513c; font-size: .68rem; font-weight: 800; }
  .basePrice { color: #929a91; font-size: .75rem; text-decoration: line-through; }
`;
export const ComboWrapper = styled.div`
  display: flex; align-items: center; gap: 10px; width: 100%;
  input { width: 17px; height: 17px; accent-color: var(--setsu-forest); cursor: pointer; flex-shrink: 0; }
  label { display: flex; justify-content: space-between; align-items: center; gap: 12px; width: 100%; padding: 12px 14px; border: 1px solid #e8e4da; border-radius: 12px; background: #faf8f2; cursor: pointer; }
  input:checked + label { border-color: var(--setsu-forest); background: #edf2eb; box-shadow: inset 0 0 0 1px var(--setsu-forest); }
  label > span { max-width: 70%; color: #48574d; font-size: .82rem; font-weight: 700; line-height: 1.5; }
  @media(max-width:600px) { label { align-items: flex-start; flex-direction: column; } label > span { max-width: 100%; } .discount { flex-direction: row; align-items: center; gap: 8px; } }
`;
export const SectionButton = styled.div`
  position: sticky; bottom: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 16px; width: calc(100% + 40px); margin: 0 -20px; padding: 15px 22px calc(15px + env(safe-area-inset-bottom)); border-top: 1px solid #dfe3d8; background: rgba(255,254,250,.97); color: var(--setsu-forest); backdrop-filter: blur(14px);
  .sectionAdds { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
  .selectedCombo { margin: 0; color: var(--setsu-forest); font-size: .9rem; font-weight: 800; }
  .selectedOptions { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; color: #7c867c; font-size: .67rem; line-height: 1.4; }
  .selectedOptions.isActive { display: none; }
  .dataOrder { display: flex; align-items: center; gap: 12px; }
  .dataOrder p { margin: 0; color: var(--setsu-forest); font-size: 1.3rem; font-weight: 800; white-space: nowrap; }
  > svg { flex-shrink: 0; color: #79877c; font-size: 1.3rem; cursor: pointer; transform: rotate(180deg); transition: transform .2s ease; }
  > svg.rotate { transform: rotate(0deg); }
  @media(max-width:600px) { width: calc(100% + 24px); margin: 0 -12px; padding: 13px 14px calc(13px + env(safe-area-inset-bottom)); gap: 9px; flex-wrap: wrap; .sectionAdds { width: calc(100% - 30px); } .selectedOptions { font-size: .62rem; } .dataOrder { width: 100%; justify-content: space-between; } .dataOrder p { font-size: 1.15rem; } }
`;
