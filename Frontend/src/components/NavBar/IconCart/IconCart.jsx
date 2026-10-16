import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart } from "../../../store/slice/cartSlice";
import { closeOverlay, openOverlay } from "../../../store/slice/overlaySlice";
import { closeModalCombined } from "../../../store/slice/combinedPiecesSlice";
import { ContainerIcon } from "./IconCartStyles";

const IconCart = ({ iconRef }) => {
  const itemsCart = useSelector((state) => state.cart.items);
  const activeCart = useSelector((state) => state.cart.active);
  const dispatch = useDispatch();
  const count = itemsCart.reduce((acc, item) => acc + item.quantity, 0);
  return <ContainerIcon ref={iconRef} type="button" aria-label={`Abrir carrito, ${count} productos`} onClick={() => {
    if (activeCart) { dispatch(closeOverlay()); dispatch(closeCart()); }
    else { dispatch(openCart()); dispatch(openOverlay()); dispatch(closeModalCombined()); }
  }}><FiShoppingBag aria-hidden="true" /><p>{count}</p></ContainerIcon>;
};
export default IconCart;
