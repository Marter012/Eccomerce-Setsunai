# models/combinedPiece.py
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any

class CombinedPiece(BaseModel):
    name: str = Field(..., min_length=1)
    img: str
    typePieces: List[str]
    proteins: List[str]
    description: str


class CombinedPieceModel(CombinedPiece):
    id: Optional[str] = Field(default=None, alias="_id")
    code: str
    # las variantes NO se guardan en el doc principal
    comboVariants: Optional[List[Dict[str, Any]]] = None
    state: bool = True

    model_config = {
        "populate_by_name": True,
    }


class CombinedPieceUpdate(BaseModel):
    name: Optional[str] = None
    img: Optional[str] = None
    typePieces: Optional[List[str]] = None
    proteins: Optional[List[str]] = None
    description: Optional[str] = None
    state: Optional[bool] = None
