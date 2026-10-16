import styled from "styled-components";
export const ContainerIcon = styled.button`
  position: relative; display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; padding: 0; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; background: rgba(255,255,255,.07); cursor: pointer;
  svg { width: 22px; height: 22px; color: #fffdf8; }
  img { width: 25px; height: 25px; object-fit: contain; filter: brightness(0) invert(1); }
  p { position: absolute; top: -4px; right: -4px; display: flex; align-items: center; justify-content: center; min-width: 20px; height: 20px; padding: 0 5px; margin: 0; border: 2px solid #0d2923; border-radius: 99px; background: #d9b879; color: #173b32; font-size: .65rem; font-weight: 800; }
  &:hover { background: rgba(255,255,255,.14); }
`;
