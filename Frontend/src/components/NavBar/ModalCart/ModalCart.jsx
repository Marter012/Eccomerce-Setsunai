import { useEffect } from "react";
import { FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { activeOrder, clearCart, closeCart } from "../../../store/slice/cartSlice";
import { closeOverlay } from "../../../store/slice/overlaySlice";
import OrderSent from "../OrderSent/OrderSent";
import Overlay from "../../ModalOverlay/ModalOverlay";
import ButtonAddItem from "../../utils/Buttons/ButtonAddItem";
import { CardCart, CardsCart, CartCloseIcon, CartDeleteIcon, ContainerModalCart, SectionModalCart, TotalCart } from "./ModalCartStyles";

const SALSAS_LABELS = { soja: "Salsa de soja", teriyaki: "Salsa teriyaki", buenosAires: "Salsa Buenos Aires" };
const money = (value) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(Number(value) || 0);

const ModalCart = () => {
  const itemsCart = useSelector((state) => state.cart.items);
  const orderState = useSelector((state) => state.cart.stateOrder);
  const activeCart = useSelector((state) => state.cart.active);
  const dispatch = useDispatch();
  const total = itemsCart.reduce((acc, item) => acc + (Number(item.finalPrice) || 0) * item.quantity, 0);
  const count = itemsCart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (!activeCart) return undefined;
    const handleKeyDown = (event) => { if (event.key === "Escape") { if (orderState) dispatch(activeOrder()); dispatch(closeCart()); dispatch(closeOverlay()); } };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKeyDown); document.body.style.overflow = previousOverflow; };
  }, [activeCart, dispatch, orderState]);

  const close = () => { if (orderState) dispatch(activeOrder()); dispatch(closeCart()); dispatch(closeOverlay()); };

  return <>
    {activeCart && <Overlay onClose={close} />}
    <ContainerModalCart $activeCart={activeCart} aria-hidden={!activeCart}>
      <SectionModalCart>
        {orderState ? <OrderSent /> : <>
          <div className="title">
            <div className="heading"><p className="eyebrow">TU SELECCIÓN · {count} {count === 1 ? "producto" : "productos"}</p><h4>Tu carrito</h4></div>
            <div className="header-actions">
              {itemsCart.length > 0 && <CartDeleteIcon role="button" tabIndex={0} aria-label="Vaciar carrito" title="Vaciar carrito" onClick={() => dispatch(clearCart())} onKeyDown={(e) => e.key === "Enter" && dispatch(clearCart())} />}
              <CartCloseIcon role="button" tabIndex={0} aria-label="Cerrar carrito" title="Cerrar carrito" onClick={close} onKeyDown={(e) => e.key === "Enter" && close()} />
            </div>
          </div>
          <CardsCart>
            {itemsCart.length === 0 ? <div className="empty-cart"><div className="empty-icon"><FiShoppingBag /></div><strong>Tu carrito está esperando</strong><p>Elegí tus piezas o combinados favoritos<br />y acá vas a ver tu pedido.</p></div> : itemsCart.map((item, index) => {
              const selections = item.selections || {};
              const include = selections.include || {};
              const includeLabels = [];
              if (include.palitos) includeLabels.push("Palitos");
              if (include.wasabi) includeLabels.push("Wasabi");
              if (include.jengibreEncurtido) includeLabels.push("Jengibre");
              const extrasText = selections.extras?.map((e) => e.name).join(", ");
              const drinksText = selections.drinks?.map((d) => d.name).join(", ");
              const cartItem = { ...item, cartKey: item.cartKey || `${item._id || item.code}-${item.selectedSize}-${JSON.stringify(item.selections || {})}` };
              return <CardCart key={`${cartItem.cartKey}-${index}`}>
                <img src={item.img || "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80"} alt={item.name || "Producto de sushi"} />
                <div className="dataProduct">
                  <h4>{item.name}{item.selectedSize ? ` · ${item.selectedSize} piezas` : ""}</h4>
                  {includeLabels.length > 0 && <p>Incluye: {includeLabels.join(", ")}</p>}
                  {include.salsa && <p>{SALSAS_LABELS[include.salsa] || include.salsa}</p>}
                  {extrasText && <p>Extras: {extrasText}</p>}
                  {drinksText && <p>Bebidas: {drinksText}</p>}
                </div>
                <p className="item-price">{money((Number(item.finalPrice) || 0) * item.quantity)}</p>
                <div className="quantity-wrap"><span className="unit-price">{money(item.finalPrice)} c/u</span><ButtonAddItem item={cartItem} label="Agregar" /></div>
              </CardCart>;
            })}
          </CardsCart>
          <TotalCart>
            <div className="total-line"><span>Total estimado</span><strong>{money(total)}</strong></div>
            <p className="checkout-note">El envío o retiro se coordina al confirmar el pedido por WhatsApp.</p>
            <button disabled={itemsCart.length === 0} onClick={() => dispatch(activeOrder())}>Continuar con mi pedido <FiArrowRight /></button>
          </TotalCart>
        </>}
      </SectionModalCart>
    </ContainerModalCart>
  </>;
};
export default ModalCart;
