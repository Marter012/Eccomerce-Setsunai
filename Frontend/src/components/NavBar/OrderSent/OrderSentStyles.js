import styled from "styled-components";
export const ContainerOrderSent = styled.form`
  position: relative; width: 100%; height: 100%; min-height: 0; display: flex; flex-direction: column; align-items: stretch; gap: 16px; overflow-y: auto; padding: 32px clamp(22px, 5vw, 34px); text-align: left; background: #fffefa;
  > svg { flex-shrink: 0; color: #6b7b70; font-size: 1.3rem; cursor: pointer; }
  h4 { margin: 4px 0 0; color: var(--setsu-forest); font-size: 2rem; line-height: 1.1; }
  .intro { margin: -8px 0 4px; color: #7d887f; font-size: .83rem; }
  label { color: #5d6b60; font-size: .76rem; font-weight: 700; }
  input[type='text'] { width: 100%; min-height: 48px; padding: 0 14px; border: 1px solid #dddcd2; border-radius: 12px; outline: none; background: #fff; font-size: .88rem; }
  input[type='text']:focus { border-color: #789487; box-shadow: 0 0 0 3px rgba(22,59,50,.08); }
  input.error { border-color: #c45f4b; }
  .field-error { color: #c45f4b; font-size: .75rem; }
  p { margin: 0; color: #78837a; font-size: .8rem; line-height: 1.6; }
  .total { display: flex; justify-content: space-between; align-items: center; padding: 16px; border-radius: 14px; background: #f4f1e8; color: var(--setsu-forest); font-size: 1.3rem; font-weight: 800; }
  .payment-heading { margin-bottom: -8px; color: var(--setsu-forest); font-size: .82rem; font-weight: 800; }
  .payment-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .payment-option { display: flex; align-items: center; justify-content: center; min-height: 55px; padding: 10px; border: 1px solid #e0dfd5; border-radius: 13px; background: #fff; color: #5c6a60; font-size: .82rem; font-weight: 700; cursor: pointer; text-align: center; }
  .payment-option.selected { border-color: var(--setsu-forest); background: #eaf0e9; color: var(--setsu-forest); box-shadow: inset 0 0 0 1px var(--setsu-forest); }
  .payment-option.error { border-color: #c45f4b; }
  .help-copy { padding: 12px 14px; border-left: 3px solid var(--setsu-gold); background: #faf7f0; }
  button[type='submit'] { display: inline-flex; align-items: center; justify-content: center; gap: 9px; width: 100%; min-height: 54px; margin-top: auto; border: 0; border-radius: 999px; background: var(--setsu-forest); color: white; font-size: .88rem; font-weight: 800; cursor: pointer; }
  button[type='submit']:hover { background: var(--setsu-forest-deep); }
  @media(max-width:480px) { padding: 24px 20px; h4 { font-size: 1.75rem; } .payment-options { grid-template-columns: 1fr; } }
`;
