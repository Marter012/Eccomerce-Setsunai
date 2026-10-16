# models/bonusProduct.py
from pydantic import BaseModel, Field
from typing import Optional

class BonusProduct(BaseModel):
    name: str = Field(..., min_length=1)
    description: str
    img: str
    type: str
    price: int = Field(..., ge=0)


class BonusProductModel(BonusProduct):
    id: Optional[str] = Field(default=None, alias="_id")
    code: str
    state: bool = True

    model_config = {
        "populate_by_name": True,
    }


class BonusProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    img: Optional[str] = None
    type: Optional[str] = None
    price: Optional[int] = None
    state: Optional[bool] = None
