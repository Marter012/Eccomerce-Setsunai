import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { activeOrder, clearCart, toggleCart } from "../../../store/slice/cartSlice";
import { toggleOverlay } from "../../../store/slice/overlaySlice";
import { ContainerOrderSent } from "./OrderSentStyles";

const OrderSent = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ name: false, paymentMethod: false });
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + (Number(item.finalPrice) || 0) * item.quantity, 0);
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const formatSelections = (selections) => {
    if (!selections) return "";
    const sauces = { soja: "Salsa de soja", teriyaki: "Salsa teriyaki", buenosAires: "Salsa Buenos Aires" };
    const includeLabels = { palitos: "Palitos", wasabi: "Wasabi", jengibreEncurtido: "Jengibre encurtido" };
    const include = selections.include || {};
    const blocks = [];
    const selectedIncludes = Object.entries(include).filter(([key, value]) => value === true && includeLabels[key]).map(([key]) => includeLabels[key]);
    if (selectedIncludes.length) blocks.push(`Incluye: ${selectedIncludes.join(", ")}`);
    if (include.salsa) blocks.push(`Salsa: ${sauces[include.salsa] || include.salsa}`);
    if (selections.extras?.length) blocks.push(`Extras: ${selections.extras.map((item) => item.name).join(", ")}`);
    if (selections.drinks?.length) blocks.push(`Bebidas: ${selections.drinks.map((item) => item.name).join(", ")}`);
    return blocks.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: !name.trim(), paymentMethod: !paymentMethod };
    setErrors(newErrors);
    if (newErrors.name || newErrors.paymentMethod) return;
    const phone = "543541544418";
    const details = cartItems.map((item) => {
      const size = item.selectedSize ? ` · ${item.selectedSize} piezas` : "";
      const selections = formatSelections(item.selections);
      return `• ${item.quantity} × *${item.name}*${size} — $${(Number(item.finalPrice) || 0) * item.quantity}${selections ? `\n${selections}` : ""}`;
    }).join("\n\n");
    const msg = `*¡Hola Setsu! Quiero confirmar mi pedido.*\n\n👤 *Nombre:* ${name.trim()}\n💳 *Método de pago:* ${paymentMethod}\n\n🧾 *Detalle del pedido*\n${details}\n\n💰 *Total estimado: $${total}*\n\n¿Me indican la coordinación de retiro o delivery? ¡Gracias!`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) window.location.href = url;
    else window.open(url, "_blank", "noopener,noreferrer");
    setName(""); setPaymentMethod(""); dispatch(clearCart()); dispatch(toggleCart()); dispatch(toggleOverlay()); dispatch(activeOrder());
  };

  return <ContainerOrderSent onSubmit={handleSubmit}>
    <IoMdArrowRoundBack role="button" tabIndex={0} aria-label="Volver al carrito" onClick={() => dispatch(activeOrder())} onKeyDown={(e) => e.key === "Enter" && dispatch(activeOrder())} />
    <h4>Un último paso 🍣</h4>
    <p className="intro">Dejanos tus datos y te llevamos a WhatsApp para coordinar tu pedido.</p>
    <div className="total"><span>{count} {count === 1 ? "producto" : "productos"}</span><strong>${total.toLocaleString("es-AR")}</strong></div>
    <label htmlFor="customer-name">¿A nombre de quién preparamos el pedido?</label>
    <input id="customer-name" type="text" autoComplete="name" placeholder="Tu nombre y apellido" value={name} onChange={(e) => { setName(e.target.value); if (e.target.value.trim()) setErrors((prev) => ({ ...prev, name: false })); }} className={errors.name ? "error" : ""} aria-invalid={errors.name} />
    {errors.name && <p role="alert" className="field-error">Ingresá tu nombre para continuar.</p>}
    <p className="payment-heading">¿Cómo preferís pagar?</p>
    <div className="payment-options" role="radiogroup" aria-label="Método de pago">
      {[{ value: "EFECTIVO", label: "💵 Efectivo" }, { value: "TRANSFERENCIA", label: "🏦 Transferencia" }].map((option) => <button key={option.value} type="button" role="radio" aria-checked={paymentMethod === option.value} className={`payment-option ${paymentMethod === option.value ? "selected" : ""} ${errors.paymentMethod ? "error" : ""}`} onClick={() => { setPaymentMethod(option.value); setErrors((prev) => ({ ...prev, paymentMethod: false })); }}>{option.label}</button>)}
    </div>
    {errors.paymentMethod && <p role="alert" className="field-error">Elegí un método de pago para continuar.</p>}
    <p className="help-copy">Al continuar, se abrirá WhatsApp con el detalle de tu compra para confirmar disponibilidad, retiro o delivery.</p>
    <button type="submit"><FiCheckCircle /> Confirmar pedido por WhatsApp</button>
  </ContainerOrderSent>;
};
export default OrderSent;
