import { PrincipalContainer } from "../../Styles/GlobalStyles";
import CardsHome from "../../components/CardsHome/CardsHome";
import TypeRolls from "../../components/TypeRolls/TypeRolls";

const Home = () => {
  return (
    <PrincipalContainer>
      <CardsHome />
      <TypeRolls />
    </PrincipalContainer>
  );
};

export default Home;
