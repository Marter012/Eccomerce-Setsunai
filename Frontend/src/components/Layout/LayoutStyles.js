import styled from "styled-components";

export const LayoutWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;

  .backgroundBody {
    width: clamp(90px, 14vw, 190px);
    height: auto;
    position: fixed;
    z-index: -1;
    object-fit: contain;
    opacity: .12;
    pointer-events: none;
  }
  .img1 { top: 35%; left: -35px; }
  .img2 { top: 16%; right: 3%; }
  .img3 { bottom: 1%; right: 5%; }

  @media (max-width: 600px) {
    .backgroundBody { width: 100px; opacity: .07; }
    .img1 { left: -35px; }
    .img2 { right: -20px; }
    .img3 { right: -10px; }
  }
`;
