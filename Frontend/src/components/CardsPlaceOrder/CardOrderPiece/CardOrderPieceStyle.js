import styled from "styled-components";
export const ContainerCardOrderStyle = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(22, 59, 50, 0.09);
  border-radius: 22px;
  background: #fffefa;
  box-shadow: 0 8px 24px rgba(20, 43, 34, 0.045);
  overflow: hidden;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;
  &:hover {
    box-shadow: 0 14px 34px rgba(20, 43, 34, 0.09);
  }
`;
export const CardOrderStyle = styled.div`
  display: grid;
  grid-template-columns: 132px minmax(0, 1fr) auto;
  gap: 17px;
  align-items: center;
  width: 100%;
  min-width: 0;
  padding-bottom: 13px;
  > img {
    width: 132px;
    height: 132px;
    object-fit: cover;
    border-radius: 15px;
    background: #eee8dc;
  }
  section {
    min-width: 0;
    text-align: left;
  }
  .btnPieces {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
  }
  .btnPieces h4 {
    flex: 1 1 100%;
    margin: 0 0 4px;
    color: var(--setsu-forest);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
  }
  .btnPieces button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 48px;
    min-height: 30px;
    padding: 0 10px;
    border: 1px solid #e0dfd4;
    border-radius: 99px;
    background: #f8f6f0;
    color: #6f7b71;
    cursor: pointer;
    font-size: 0.72rem;
    font-weight: 800;
    user-select: none;
  }
  .btnPieces button.selected {
    border-color: var(--setsu-forest);
    background: var(--setsu-forest);
    color: white;
  }
  .description {
    margin: 9px 0 0;
    color: #778178;
    font-size: 0.76rem;
    line-height: 1.55;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 11px;
  }
  .buttons p {
    margin: 0;
    color: var(--setsu-forest);
    font-size: 1.25rem;
    font-weight: 800;
    white-space: nowrap;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 13px;
    > img {
      width: 110px;
      height: 110px;
    }
    .buttons {
      grid-column: 2;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (max-width: 520px) {
    grid-template-columns: 88px minmax(0, 1fr);
    gap: 12px;
    > img {
      width: 88px;
      height: 100px;
    }
    .btnPieces h4 {
      font-size: 1.05rem;
    }
    .description {
      font-size: 0.72rem;
    }
    .buttons {
      grid-column: 1 / -1;
      padding-left: 2px;
    }
  }
`;
