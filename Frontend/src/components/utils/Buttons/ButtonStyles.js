import styled from "styled-components";
export const ButtonAddStyled = styled.div`
  display: inline-flex; align-items: center; justify-content: center; min-width: 0;
  .paddingAct { padding: 10px 18px; }
  button { min-height: 38px; min-width: 38px; display: inline-flex; align-items: center; justify-content: center; border: 0; border-radius: 999px; background: var(--setsu-forest); color: white; font-size: .82rem; font-weight: 800; cursor: pointer; white-space: nowrap; }
  button:hover:not(:disabled) { background: var(--setsu-forest-deep); }
  button:disabled, .disabled { opacity: .45; cursor: not-allowed; }
  .disabled { display: none; }
  @media(max-width:520px) { .paddingAct { padding: 10px 15px; } }
`;
export const ContainerQuantity = styled.div`
  display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 4px; border: 1px solid #e5e2d8; border-radius: 999px; background: #fffefa;
  p { min-width: 20px; margin: 0; color: var(--setsu-forest) !important; font-size: .88rem !important; font-weight: 800; text-align: center; }
  button { min-width: 30px; min-height: 30px; background: #edf0e9; color: var(--setsu-forest); font-size: 1.1rem; }
  button:hover { background: #dfe7dc; }
`;
