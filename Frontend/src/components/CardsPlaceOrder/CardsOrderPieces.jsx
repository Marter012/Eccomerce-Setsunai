import { useSelector } from "react-redux";
import { ContainerCardPieces } from "./CardsOrderStyles";
import CardOrderPiece from "./CardOrderPiece/CardOrderPiece";
const CardsOrderPieces = ({ search = "" }) => {
  const { items: piecesItems = [], loading: piecesLoading, error: piecesError } = useSelector((state) => state.pieces);
  return <ContainerCardPieces>
    {piecesLoading && <p>Estamos preparando las piezas para vos…</p>}
    {piecesError && <p>No pudimos cargar las piezas. Revisá tu conexión e intentá nuevamente.</p>}
    {!piecesLoading && !piecesError && piecesItems.filter((piece) => `${piece.name || ""} ${piece.description || ""} ${piece.category || ""} ${piece.protein || ""}`.toLowerCase().includes(search.toLowerCase())).map((piece) => <CardOrderPiece key={piece._id || piece.id} piece={piece} />)}
    {!piecesLoading && !piecesError && piecesItems.filter((piece) => `${piece.name || ""} ${piece.description || ""} ${piece.category || ""} ${piece.protein || ""}`.toLowerCase().includes(search.toLowerCase())).length === 0 && <p>No encontramos piezas con esa búsqueda.</p>}
  </ContainerCardPieces>;
};
export default CardsOrderPieces;
