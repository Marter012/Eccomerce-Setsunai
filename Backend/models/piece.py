# models/piece.py
from pydantic import BaseModel, Field
from typing import Optional

# Modelo de creación
class Piece(BaseModel):
    name: str = Field(..., min_length=1)
    description: str
    img: str
    costRoll: float = Field(..., ge=0)
    category: str
    protein: str


# Modelo DB
class PieceModel(Piece):
    id: Optional[str] = Field(default=None, alias="_id")
    code: str
    price_3p: int
    price_4p: int
    price_5p: int
    price_8p: int
    price_16p: int
    state: bool = True

    model_config = {
        "populate_by_name": True,
    }


# Modelo update
class PieceUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    img: Optional[str] = None
    costRoll: Optional[float] = Field(default=None, ge=0)
    category: Optional[str] = None
    protein: Optional[str] = None
    state: Optional[bool] = None
