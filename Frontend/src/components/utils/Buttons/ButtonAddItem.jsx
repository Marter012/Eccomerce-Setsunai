import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../store/slice/cartSlice";
import { ButtonAddStyled, ContainerQuantity } from "./ButtonStyles";

const ButtonAddItem = ({ item, label = "Agregar", disabled = false }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];

  if (!item) return null;

  const cartItem = cartItems.find(
    (p) => p.cartKey === item.cartKey
  );

  return (
    <ButtonAddStyled>
      {cartItem ? (
        <ContainerQuantity>
          <button onClick={() => dispatch(removeItem({ item }))}>-</button>
          <p>{cartItem.quantity}</p>
          <button onClick={() => dispatch(addItem({ item }))}>+</button>
        </ContainerQuantity>
      ) : (
        <button
          disabled={disabled}
          className={`paddingAct ${disabled ? "disabled" : ""}`}

          onClick={() => dispatch(addItem({ item }))}
        >
          {label}
        </button>
      )}
    </ButtonAddStyled>
  );
};

export default ButtonAddItem;
