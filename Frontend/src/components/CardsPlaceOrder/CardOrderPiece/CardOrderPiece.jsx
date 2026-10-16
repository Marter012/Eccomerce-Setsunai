import { useState } from "react";
import ButtonAddItem from "../../utils/Buttons/ButtonAddItem";
import SectionProductsAdd from "../../SectionProductsAdd/SectionProductsAdd";
import { CardOrderStyle, ContainerCardOrderStyle } from "./CardOrderPieceStyle";
import { useSelections } from "../../../hooks/useSelections";

const CardOrderPiece = ({ piece }) => {
  const [selectedSize, setSelectedSize] = useState(8);

  const finalPrice = selectedSize === 8 ? piece.price_8p : piece.price_16p;

  const { get, updateInclude } = useSelections();

  const selectionsForCart = piece ? get(piece._id) : null;

  const cartKey = piece
    ? `${piece._id}-${selectedSize}-${JSON.stringify(
        selectionsForCart
      )}`
    : null;
  return (
    <ContainerCardOrderStyle>
      <CardOrderStyle>
        <img src={piece.img || "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"} alt={piece.name} loading="lazy" />

        <section>
          <div className="btnPieces">
            <h4>{piece.name}</h4>

            <button type="button" aria-pressed={selectedSize === 8} className={selectedSize === 8 ? "selected" : ""} onClick={() => setSelectedSize(8)}>8 piezas</button>
            <button type="button" aria-pressed={selectedSize === 16} className={selectedSize === 16 ? "selected" : ""} onClick={() => setSelectedSize(16)}>16 piezas</button>
          </div>

          <p className="description">{piece.description}</p>
        </section>

        <div className="buttons">
          <p>${finalPrice}</p>
          <ButtonAddItem
            item={{
              ...piece,
              selectedSize,
              finalPrice,
              selections: selectionsForCart,
              cartKey,
            }}
          />
          
        </div>
      </CardOrderStyle>

      <SectionProductsAdd
        ownerId={piece._id}
        data={get(piece._id).include}
        onChange={updateInclude}
      />
    </ContainerCardOrderStyle>
  );
};

export default CardOrderPiece;
