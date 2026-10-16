import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { ContainerFooter, ContainerIconFooter } from "./FooterStyles";
const PHONE = "543541544418";
const Footer = () => {
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hola Setsu, me gustaría realizar un pedido.")}`;
  return <ContainerFooter>
    <div className="footer-main">
      <div className="footer-brand"><span className="brand-mark">S.</span><div><strong>SETSU</strong><small>Sushi artesanal</small></div></div>
      <p className="footer-phrase">Sabores que invitan a compartir.</p>
      <ContainerIconFooter>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Setsu por WhatsApp"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/sushisetsu" target="_blank" rel="noreferrer" aria-label="Seguir a Setsu en Instagram"><FaInstagram /></a>
      </ContainerIconFooter>
    </div>
    <div className="footer-bottom"><span>Tanti · Córdoba, Argentina</span><span>Preparado artesanalmente, por pedido <FiArrowUpRight /></span><span>© {new Date().getFullYear()} Setsu</span></div>
  </ContainerFooter>;
};
export default Footer;
