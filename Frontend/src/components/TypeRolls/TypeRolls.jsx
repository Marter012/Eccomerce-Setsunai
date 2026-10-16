import { CardTypeRoll, ContainerTypeRoll, ContainerTypeRolls } from "./TypeRollsStyles";

const rolls = [
  { name: "Maki", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=85", description: "Un clásico delicado: arroz y relleno envueltos en alga nori, con el ingrediente protagonista en el centro." },
  { name: "Uramaki", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85", description: "El arroz queda por fuera y abraza el relleno. Una combinación de texturas, toppings y sabores para descubrir." },
  { name: "Tamago", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=85", description: "Una opción suave y delicada, inspirada en la tradicional tortilla japonesa, con un perfil de sabor equilibrado.", note: "Cada variedad tiene su propia personalidad." },
];
export default function TypeRolls() {
  return <ContainerTypeRolls>
    <p className="section-kicker">Un mundo de texturas</p>
    <h2 className="Title">Conocé nuestros rolls</h2>
    <p className="section-intro">Tradición japonesa, ingredientes que se complementan y una preparación cuidada en cada detalle.</p>
    <ContainerTypeRoll>{rolls.map((roll) => <CardTypeRoll key={roll.name}>
      <img src={roll.image} alt={`Sushi estilo ${roll.name}`} loading="lazy" />
      <div className="roll-copy"><h3 className="TypeRoll">{roll.name}</h3><p className="DescriptionRoll">{roll.description}{roll.note && <span>{roll.note}</span>}</p></div>
    </CardTypeRoll>)}</ContainerTypeRoll>
  </ContainerTypeRolls>;
}
