import os
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from dataBase.DBConfing import connect_to_db, close_db, init_indexes
from routes.pieceRoutes import router as piece_router
from routes.combinedPiecesRoutes import router as combined_piece_router
from routes.bonusProduct import router as bonus_product_router


def get_allowed_origins() -> list[str]:
    """
    Comma-separated list of frontend origins.
    Example: ALLOWED_ORIGINS=http://localhost:5173,https://your-store.vercel.app
    """
    configured = os.getenv("ALLOWED_ORIGINS", "")
    origins = [origin.strip().rstrip("/") for origin in configured.split(",") if origin.strip()]
    defaults = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://setsunai-front.vercel.app",
    ]
    return list(dict.fromkeys([*defaults, *origins]))


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_db()
    await init_indexes()
    try:
        yield
    finally:
        await close_db()


app = FastAPI(
    title="Setsu API",
    description="API de catálogo y combinados para la tienda Setsu.",
    version="2.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/", tags=["Health"])
async def root():
    return {
        "status": "ok",
        "service": "Setsu API",
        "docs": "/docs",
        "health": "/health",
    }


@app.get("/health", tags=["Health"])
async def health():
    from dataBase.DBConfing import get_db
    db = await get_db()
    await db.command("ping")
    return {"status": "ok", "database": "connected"}


app.include_router(piece_router, prefix="/authPiece", tags=["Piece"])
app.include_router(combined_piece_router, prefix="/authCombinedPieces", tags=["CombinedPieces"])
app.include_router(bonus_product_router, prefix="/authBonusProduct", tags=["BonusProduct"])
