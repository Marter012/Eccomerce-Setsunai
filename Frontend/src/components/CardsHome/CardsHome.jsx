import { useSelector } from "react-redux";
import {
  HomeSection, HomeMainCard, HomeBadgeRow, HomeTitle, HomeLead,
  HomeInfoGrid, HomeInfoCard, HomeCTAGroup, HomeRightColumn,
  HomeSmallCardRow, HomeSmallCard, HomeDescriptionTitle, HomeBtn,
} from "./CardsHomeStyles";
import { FiArrowUpRight, FiClock, FiMapPin, FiShoppingBag } from "react-icons/fi";

export default function CardsHome() {
  const pieces = useSelector((state) => state.pieces.items) || [];
  const featured = pieces[0];
  const recommendation = pieces[2] || pieces[1];

  return (
    <HomeSection>
      <HomeMainCard>
        <HomeDescriptionTitle>
          <HomeBadgeRow><span className="badge-dot" /> SUSHI ARTESANAL · TANTI, CÓRDOBA</HomeBadgeRow>
          <p className="eyebrow">Una pausa que vale la pena</p>
          <HomeTitle>Pequeños bocados.<br /><em>Grandes momentos.</em></HomeTitle>
          <HomeLead>En Setsu preparamos sushi artesanal por pedido, con dedicación en cada pieza y sabores que invitan a compartir.</HomeLead>
          <HomeCTAGroup>
            <HomeBtn to="/placeOrder" className="primary">Armar mi pedido <FiArrowUpRight /></HomeBtn>
            <HomeBtn to="/pieces" className="secondary">Explorar el menú</HomeBtn>
          </HomeCTAGroup>
          <HomeInfoGrid>
            <HomeInfoCard><FiClock /><div><strong>Hecho por pedido</strong><span>Preparado con anticipación</span></div></HomeInfoCard>
            <HomeInfoCard><FiMapPin /><div><strong>Tanti, Córdoba</strong><span>Retiro y delivery a coordinar</span></div></HomeInfoCard>
          </HomeInfoGrid>
        </HomeDescriptionTitle>
        <HomeRightColumn>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src={featured?.img || "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=85"} alt={featured?.name || "Selección de sushi artesanal"} />
            <div className="photo-label"><span>SETSU SELECCIÓN</span><strong>Fresco. Delicado. Nuestro.</strong></div>
            <div className="round-stamp"><span>HECHO</span><strong>A<br/>MANO</strong><span>CON AMOR</span></div>
          </div>
          <HomeSmallCardRow>
            {[{ item: featured, title: "Para empezar" }, { item: recommendation, title: "Un favorito" }].map(({ item, title }, index) => (
              <HomeSmallCard key={`${title}-${item?._id || item?.id || index}`}>
                <div className="mini-image"><img src={item?.img || "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=500&q=80"} alt={item?.name || title} /></div>
                <div className="mini-info"><span>{title}</span><strong>{item?.name || (index === 0 ? "Piezas artesanales" : "Combinados Setsu")}</strong><small>Descubrilo en nuestro menú</small></div>
              </HomeSmallCard>
            ))}
          </HomeSmallCardRow>
        </HomeRightColumn>
      </HomeMainCard>
      <div className="home-trust-row">
        <span><FiShoppingBag /> Pedidos simples, desde la web</span><i />
        <span>Elaboración artesanal</span><i />
        <span>Sabores para compartir</span>
      </div>
    </HomeSection>
  );
}
