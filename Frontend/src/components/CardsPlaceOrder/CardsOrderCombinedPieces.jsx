import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardCombinedPieces,
  ContainerCombinedPieces,
} from "./CardsOrderStyles";
import ModalCombinedPieces from "./ModalCombinedPieces/ModalCombinedPieces";
import Overlay from "../ModalOverlay/ModalOverlay";
import { closeOverlay, openOverlay } from "../../store/slice/overlaySlice";
import {
  closeModalCombined,
  openModalCombined,
} from "../../store/slice/combinedPiecesSlice";

const CardsOrderCombinedPieces = ({ search = "" }) => {
  const [combinedSelected, setCombinedSelected] = useState(null);

  const dispatch = useDispatch();

  const combinedState = useSelector((state) => state.combinedPieces) || {};
  const activeModal = useSelector((state) => state.combinedPieces.activeModal);

  const {
    items: combinedItems = [],
    loading: combinedLoading,
    error: combinedError,
  } = combinedState;

  const handleCardClick = (item) => {
    dispatch(openModalCombined()); // Abrir modal siempre
    dispatch(openOverlay()); // Abrir overlay
    setCombinedSelected(item); // Pasar item seleccionado al modal
  };
  return (
    <ContainerCombinedPieces>
      {activeModal && <Overlay
        onClose={() => {
          dispatch(closeOverlay());
          dispatch(closeModalCombined());
        }}
      />}

      {activeModal && (
        <ModalCombinedPieces combinedSelected={combinedSelected} />
      )}

      {combinedLoading && <p>Cargando combinados...</p>}
      {combinedError && <p>Error al cargar combinados: {combinedError}</p>}

      {!combinedLoading &&
        !combinedError &&
        combinedItems?.filter((item) => `${item.name || ""} ${item.description || ""} ${(item.proteins || []).join(" ")}`.toLowerCase().includes(search.toLowerCase())).map((combinedPiece) => {
          return (
            <CardCombinedPieces
              key={`${combinedPiece._id}`}
              onClick={() => handleCardClick(combinedPiece)}
              backImg={combinedPiece.img}
            >
                {/* <span>Desde ${price}</span> */}

                <p>{combinedPiece.description}</p>
                <h4>{combinedPiece.name}</h4>
                <p>
                  Ingredientes Principales : <br />{" "}
                  {(combinedPiece.proteins || []).join(" ~ ")}
                </p>
            </CardCombinedPieces>
          );
        })}
      {!combinedLoading && !combinedError && combinedItems.filter((item) => `${item.name || ""} ${item.description || ""} ${(item.proteins || []).join(" ")}`.toLowerCase().includes(search.toLowerCase())).length === 0 && <p>No encontramos combinados con esa búsqueda.</p>}
    </ContainerCombinedPieces>
  );
};

export default CardsOrderCombinedPieces;
