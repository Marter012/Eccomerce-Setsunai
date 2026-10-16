import {
  CheckboxWrapper,
  Container,
  SaucesWrapper,
  SectionBonusProductStyles,
} from "./SectionProductsAddStyles";
import { useSelector } from "react-redux";

const SectionBonusProduct = ({ ownerId, data, onToggle }) => {
  const bonusProducts = useSelector((state) => state.bonusProduct.items) || [];

  const bebidas = bonusProducts.filter((item) => item.type === "bebida");
  const extras = bonusProducts.filter((item) => item.type === "extra");

  const selectedDrinks = data?.drinks || [];
  const selectedExtras = data?.extras || [];

  const isChecked = (product) =>
    selectedDrinks.some((d) => d._id === product._id) ||
    selectedExtras.some((d) => d._id === product._id);

  return (
    <Container>
      <SaucesWrapper>
        <p className="sauces-title">Bebidas</p>

        <SectionBonusProductStyles>
          {bebidas.map((product) => (
            <CheckboxWrapper key={product._id}>
              <input
                type="checkbox"
                id={`drink-${product._id}-${ownerId}`}
                checked={isChecked(product)}
                onChange={() => onToggle(ownerId, "drinks", product)}
              />
              <label htmlFor={`drink-${product._id}-${ownerId}`}>
                {product.name} <span>${product.price}</span>
              </label>
            </CheckboxWrapper>
          ))}
        </SectionBonusProductStyles>
      </SaucesWrapper>
      <div className="linea" />

      <SaucesWrapper>
        <p className="sauces-title">Extras</p>

        <SectionBonusProductStyles>
          {extras.map((product) => (
            <CheckboxWrapper key={product._id}>
              <input
                type="checkbox"
                id={`extra-${product._id}-${ownerId}`}
                checked={isChecked(product)}
                onChange={() => onToggle(ownerId, "extras", product)}
              />
              <label htmlFor={`extra-${product._id}-${ownerId}`}>
                {product.name} <span>${product.price}</span>
              </label>
            </CheckboxWrapper>
          ))}
        </SectionBonusProductStyles>
      </SaucesWrapper>
    </Container>
  );
};

export default SectionBonusProduct;
