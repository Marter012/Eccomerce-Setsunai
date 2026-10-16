import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { FiSearch, FiClock } from "react-icons/fi";
import { PrincipalContainer } from "../../Styles/GlobalStyles";
import { CardPieces, CardsContainerPieces, PiecesContainer } from "./PiecesStyles";

const Pieces = () => {
  const { items: pieces = [], loading, error } = useSelector((state) => state.pieces);
  const [search, setSearch] = useState("");
  const filteredPieces = useMemo(() => pieces.filter((item) => `${item.name || ""} ${item.description || ""} ${item.category || ""} ${item.protein || ""}`.toLowerCase().includes(search.toLowerCase())), [pieces, search]);
  const categories = useMemo(() => [...new Set(filteredPieces.map((item) => item.category || "Nuestras piezas"))], [filteredPieces]);
  return <PrincipalContainer>
    <PiecesContainer>
      <div className="menu-intro"><span className="eyebrow">EL MENÚ SETSU</span><h1>Una pieza, un pequeño ritual.</h1><p>Descubrí nuestras variedades, conocé sus ingredientes y encontrá tu próximo favorito.</p><div className="menu-meta"><span><FiClock /> Preparado por pedido</span><span>·</span><span>Hecho artesanalmente</span></div></div>
      <div className="menu-toolbar"><div className="toolbar-copy"><strong>Nuestras piezas</strong><span>{filteredPieces.length} {filteredPieces.length === 1 ? "variedad" : "variedades"} para descubrir</span></div><label className="search-box"><FiSearch /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por nombre o ingrediente…" aria-label="Buscar piezas" />{search && <button type="button" onClick={() => setSearch("")} aria-label="Limpiar búsqueda">×</button>}</label></div>
      {loading && <p className="state-message">Estamos preparando el menú…</p>}
      {error && <p className="state-message error">No pudimos cargar las piezas. Probá nuevamente en unos minutos.</p>}
      {!loading && !error && filteredPieces.length === 0 && <p className="state-message">No encontramos piezas con esa búsqueda. Probá con otro nombre o ingrediente.</p>}
      <CardsContainerPieces>
        {categories.map((category) => <section className="categoryBlock" key={category}>
          <div className="category-heading"><span className="category-mark" /><h2>{category}</h2><span className="category-count">{filteredPieces.filter((piece) => (piece.category || "Nuestras piezas") === category).length} opciones</span></div>
          <div className="cardsCategory">{filteredPieces.filter((piece) => (piece.category || "Nuestras piezas") === category).map((piece) => <CardPieces key={piece._id || piece.id}>
            <div className="piece-image"><img src={piece.img || "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80"} alt={piece.name} loading="lazy" /><span className="image-chip">SETSU · ARTESANAL</span></div>
            <div className="piece-copy"><h3>{piece.name}</h3><p className="description">{piece.description || "Una combinación artesanal preparada al momento."}</p>{piece.protein && <p className="protein"><span>INGREDIENTE DESTACADO</span>{piece.protein}</p>}</div>
          </CardPieces>)}</div>
        </section>)}
      </CardsContainerPieces>
    </PiecesContainer>
  </PrincipalContainer>;
};
export default Pieces;
