import styled from "styled-components";
export const Container = styled.div`
  display: grid; grid-template-columns: 1fr 1px 1fr; gap: 14px; width: 100%; padding: 12px 5px 2px; border-top: 1px solid #efede6;
  .linea { width: 1px; background: #e8e5dc; }
  @media(max-width:520px) { grid-template-columns: 1fr; gap: 12px; .linea { display: none; } }
`;
export const SaucesWrapper = styled.div`
  display: flex; flex-direction: column; align-items: stretch; gap: 8px; min-width: 0;
  .sauces-title { margin: 0; color: #788278; font-size: .67rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  > div { display: flex; flex-wrap: wrap; gap: 8px 12px; }
  @media(max-width:520px) { > div { gap: 8px 12px; } }
`;
export const CheckboxWrapper = styled.div`
  position: relative; min-width: 0;
  input { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
  label { display: inline-flex; align-items: center; gap: 6px; color: #59675d; font-size: .7rem; line-height: 1.4; cursor: pointer; user-select: none; }
  label::before { content: ''; flex-shrink: 0; width: 14px; height: 14px; border: 1px solid #d5d8ce; border-radius: 4px; background: #fffefa; transition: all .15s ease; }
  input[type='radio'] + label::before { border-radius: 50%; }
  input:checked + label::before { border-color: var(--setsu-forest); background: var(--setsu-forest); box-shadow: inset 0 0 0 3px #fffefa; }
  input:focus-visible + label { outline: 2px solid var(--setsu-gold); outline-offset: 3px; }
`;
export const SectionBonusProductStyles = styled.section`
  label { display: flex; width: 100%; }
  label span { margin-left: auto; color: var(--setsu-forest); font-size: .7rem; font-weight: 800; white-space: nowrap; }
`;
