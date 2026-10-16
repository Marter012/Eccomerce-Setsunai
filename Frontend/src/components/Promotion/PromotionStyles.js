import styled from "styled-components";

export const ContainerPromotion = styled.div`
  width: 100%;
  text-align: center;
  h4 {
    color: white;
    height: 10%;
    font-size: 3rem;
    margin: 40px;
    margin-left: 0px;
    margin-right: 0px;
    border-bottom: 1px solid white;
  }
  font-weight: 700;
`;
export const ContainerCardsPromotion = styled.div`
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .right {
    margin-left: 40%;
  }
`;

export const CardPromotion = styled.div`
  background-color: #f4e9d8;
  width: 60%;
  height: 150px;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 20px 01px;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    transition-duration: 0.5s;
    filter: brightness(1.1); 
  }
  img {
    width: 30%;
    object-fit: cover;
    height: 100%;
  }
  div {
    width: 50%;
  }
  .Title {
    font-size: 2rem;
  }
  .Description {
    font-size: 1.2rem;
  }
  .Price {
    width: 20%;
    font-size: 2rem;
  }
`;
