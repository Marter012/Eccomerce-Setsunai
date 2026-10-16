import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ModalCart from "./ModalCart/ModalCart";
import IconCart from "./IconCart/IconCart";
import { NavContainer, Hamburger, CartIconContainer, LinksContainer } from "./NavBarStyled";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconRef = useRef(null);
  const handleLinkClick = () => setMenuOpen(false);
  return <>
    <NavContainer>
      <Hamburger aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</Hamburger>
      <NavLink to="/" onClick={handleLinkClick} className="title" aria-label="Setsu, inicio">
        <img src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1765149464/SETSUNAI/Visual%20Items/logo_en_dorado_unqwwb.png" alt="" />
        <span className="brand-copy"><strong>SETSU</strong><small>Sushi artesanal</small></span>
      </NavLink>
      <LinksContainer open={menuOpen}>
        <NavLink to="/" end onClick={handleLinkClick}>Inicio</NavLink>
        <NavLink to="/pieces" onClick={handleLinkClick}>Nuestro menú</NavLink>
        <NavLink to="/placeOrder" onClick={handleLinkClick}>Hacer pedido</NavLink>
      </LinksContainer>
      <CartIconContainer><IconCart iconRef={iconRef} /></CartIconContainer>
    </NavContainer>
    <ModalCart />
  </>;
};
export default NavBar;
