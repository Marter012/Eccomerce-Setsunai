import { useState } from "react";
import {
  ComboWrapper,
  ModalCardCombinedPieces,
  ModalContainerCP,
  SectionButton,
} from "./ModalCombinedPiecesStyles";
import { useSelector } from "react-redux";
import ButtonAddItem from "../../utils/Buttons/ButtonAddItem";
import SectionProductsAdd from "../../SectionProductsAdd/SectionProductsAdd";
import SectionBonusProduct from "../../SectionProductsAdd/SectionBonusProduct";
import { useSelections } from "../../../hooks/useSelections";
import { CiCircleChevUp } from "react-icons/ci";

const SALSAS_LABELS = {
  soja: "Salsa de Soja",
  teriyaki: "Salsa Teriyaki",
  buenosAires: "Salsa Buenos Aires",
};

const EXTRAS_LABELS = {
  palitos: "Palitos",
  wasabi: "Wasabi",
  jengibreEncurtido: "Jengibre Encurtido",
};

const calculateFinalPrice = (basePrice, selections) => {
  if (!selections) return basePrice;

  const extrasTotal =
    selections.extras?.reduce((acc, item) => acc + (item.price || 0), 0) || 0;

  const drinksTotal =
    selections.drinks?.reduce((acc, item) => acc + (item.price || 0), 0) || 0;

  return basePrice + extrasTotal + drinksTotal;
};

const ModalCombinedPieces = ({ combinedSelected }) => {
  const comboVariants = useSelector((state) => state.comboVariants.items) || [];

  const [selectedSubcombo, setSelectedSubcombo] = useState(null);
  const { get, updateInclude, toggleItem } = useSelections();

  const [activeDescription, setActiveDescription] = useState(false);

  const comboWithSelectedId = comboVariants.filter(
    (combo) => combo.comboCode === combinedSelected.code
  );

  const selectedCombo = selectedSubcombo
    ? comboWithSelectedId.find((sub) => sub._id === selectedSubcombo)
    : null;

  const isDisabled = !selectedCombo;

  const selections = selectedCombo ? get(selectedCombo._id) : null;
  const finalPriceCalculated = selectedCombo
    ? calculateFinalPrice(selectedCombo.finalPrice, selections)
    : 0;

  const selectionsForCart = selectedCombo ? get(selectedCombo._id) : null;

  const cartKey = selectedCombo
    ? `${selectedCombo._id}-${selectedCombo.totalPieces}-${JSON.stringify(
        selectionsForCart
      )}`
    : null;

  const visibleCombos = selectedSubcombo
    ? comboWithSelectedId.filter((sub) => sub._id === selectedSubcombo)
    : comboWithSelectedId;

  return (
    <ModalContainerCP
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      img={combinedSelected.img}
    >
      <h2>{combinedSelected.name}</h2>

      {/* SUBCOMBOS */}
      <ModalCardCombinedPieces>
        {visibleCombos.map((sub) => (
          <ComboWrapper key={sub._id}>
            <input
              type="checkbox"
              id={`subcombo-${sub._id}`}
              checked={selectedSubcombo === sub._id}
              onChange={() =>
                setSelectedSubcombo(
                  selectedSubcombo === sub._id ? null : sub._id
                )
              }
            />

            <label htmlFor={`subcombo-${sub._id}`}>
              <span>
                • Combo {sub.totalPieces} piezas (
                {sub.pieces
                  .map((piece) =>
                    piece.pieceName.split(" ").slice(0, 3).join(" ")
                  )
                  .join(" || ")}
                )
              </span>
              <div className="discount">
                <div className="priceRow">
                  <span className="finalPrice">${sub.finalPrice}</span>
                  {sub.discountPercent > 0 && (
                    <span className="discountPercent">
                      -{sub.discountPercent}%
                    </span>
                  )}
                </div>
                {sub.discountPercent > 0 && (
                  <span className="basePrice">${sub.basePrice}</span>
                )}
              </div>
            </label>
          </ComboWrapper>
        ))}
      </ModalCardCombinedPieces>

      {/* INCLUYE + SALSA */}
      <ModalCardCombinedPieces $disabled={isDisabled}>
        {selectedCombo && (
          <SectionProductsAdd
            ownerId={selectedCombo._id}
            data={get(selectedCombo._id).include}
            onChange={updateInclude}
          />
        )}
      </ModalCardCombinedPieces>

      {/* EXTRAS / BEBIDAS */}
      <ModalCardCombinedPieces $disabled={isDisabled}>
        {selectedCombo && (
          <SectionBonusProduct
            ownerId={selectedCombo._id}
            data={get(selectedCombo._id)}
            onToggle={toggleItem}
          />
        )}
      </ModalCardCombinedPieces>

      {/* BOTÓN */}
      {selectedCombo && (
        <SectionButton>
          {/* RESUMEN */}
          {selectedCombo &&
            (() => {
              const selections = get(selectedCombo._id);
              const include = selections.include || {};

              const includeText = Object.entries(include)
                .filter(([, value]) => value === true)
                .map(([key]) => EXTRAS_LABELS[key] || key)
                .join(" ~ ");

              const salsaLabel = SALSAS_LABELS[include.salsa];

              const extrasText = selections.extras
                .map((item) => item.name)
                .join(" ~ ");

              const drinksText = selections.drinks
                .map((item) => item.name)
                .join(" ~ ");

              return (
                <div className="sectionAdds">
                  <p className="selectedCombo">
                    {combinedSelected.name} {selectedCombo.totalPieces} piezas
                  </p>

                  <div className={`selectedOptions ${activeDescription ? "isActive" : ""}`}>
                    <span>
                      Incluye :{includeText ? ` ${includeText}` : " -- "}
                    </span>
                    <span>
                      {" "}
                      Salsa:
                      {salsaLabel
                        ? ` ${salsaLabel.split(" ").slice(1).join(" ")}`
                        : " -- "}
                    </span>
                    <span>
                      Extras:
                      {extrasText ? ` ${extrasText}` : " -- "}
                    </span>
                    <span>
                      Bebidas:
                      {drinksText ? ` ${drinksText}` : " -- "}
                    </span>
                  </div>
                </div>
              );
            })()}

          <div className="dataOrder">
            <p>${finalPriceCalculated}</p>

            <ButtonAddItem
              item={{
                ...selectedCombo,
                name: combinedSelected.name,
                finalPrice: finalPriceCalculated,
                selectedSize: selectedCombo.totalPieces,
                selections: selectionsForCart,
                cartKey,
                img: combinedSelected.img,
              }}
            />
          </div>
          <CiCircleChevUp
            onClick={() => setActiveDescription(!activeDescription)}
            className={`${activeDescription ? "rotate" : ""}`}
          />
        </SectionButton>
      )}
    </ModalContainerCP>
  );
};

export default ModalCombinedPieces;
