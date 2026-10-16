import { useState } from "react";
import { FiArrowDown, FiShoppingBag, FiSearch } from "react-icons/fi";
import { PrincipalContainer } from "../../Styles/GlobalStyles";
import CardsOrderPieces from "../../components/CardsPlaceOrder/CardsOrderPieces";
import CardsOrderCombinedPieces from "../../components/CardsPlaceOrder/CardsOrderCombinedPieces";
import { PlaceOrderContainer, PlaceOrderPieces, SelectButtonsMenu } from "./PlaceOrderStyles";

const PlaceOrder = () => {
  const [selectMenu, setSelectMenu] = useState(false);
  const [search, setSearch] = useState("");
  return <PrincipalContainer>
    <PlaceOrderContainer>
      <div className="order-intro"><span className="eyebrow">ARMÁ TU EXPERIENCIA SETSU</span><h1>¿Qué se te antoja hoy?</h1><p>Elegí tus piezas o descubrí nuestros combinados. Personalizá los detalles y sumalos al carrito.</p><div className="order-steps"><span><b>01</b> Elegí tus favoritos</span><FiArrowDown /><span><b>02</b> Personalizá tu pedido</span><FiArrowDown /><span><b>03</b> Confirmá por WhatsApp</span></div></div>
      <SelectButtonsMenu role="tablist" aria-label="Categorías del menú">
        <button role="tab" aria-selected={selectMenu === false} className={selectMenu === false ? "selected" : ""} onClick={() => setSelectMenu(false)}><span>Piezas individuales</span><small>Elegí tamaño y extras</small></button>
        <button role="tab" aria-selected={selectMenu === true} className={selectMenu === true ? "selected" : ""} onClick={() => setSelectMenu(true)}><span>Combinados Setsu</span><small>Elegí la cantidad de piezas</small></button>
      </SelectButtonsMenu>
      <div className="section-caption"><div><span className="section-icon"><FiShoppingBag /></span><div><h2>{selectMenu ? "Nuestros combinados" : "Elegí tus piezas"}</h2><p>{selectMenu ? "Combinaciones para compartir o darte un gusto." : "Seleccioná 8 o 16 piezas y ajustá los acompañamientos."}</p></div></div><span className="made-to-order">Preparado por pedido</span></div>
      <label className="order-search"><FiSearch /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={selectMenu ? "Buscar un combinado…" : "Buscar una pieza o ingrediente…"} aria-label="Buscar en el menú" />{search && <button type="button" onClick={() => setSearch("")} aria-label="Limpiar búsqueda">×</button>}</label>
      <PlaceOrderPieces>{selectMenu ? <CardsOrderCombinedPieces search={search} /> : <CardsOrderPieces search={search} />}</PlaceOrderPieces>
    </PlaceOrderContainer>
  </PrincipalContainer>;
};
export default PlaceOrder;
