import os
from typing import Optional

from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017").strip()
DB_NAME = os.getenv("DB_NAME", "SETSUNAI").strip() or "SETSUNAI"

client: Optional[AsyncIOMotorClient] = None
db: Optional[AsyncIOMotorDatabase] = None


async def connect_to_db() -> AsyncIOMotorDatabase:
    """Connect to MongoDB and verify connectivity before serving requests."""
    global client, db

    if client is not None and db is not None:
        return db

    if not MONGO_URL:
        raise RuntimeError("Falta configurar MONGO_URL en las variables de entorno.")

    new_client = AsyncIOMotorClient(
        MONGO_URL,
        serverSelectionTimeoutMS=int(os.getenv("MONGO_SERVER_SELECTION_TIMEOUT_MS", "10000")),
        connectTimeoutMS=int(os.getenv("MONGO_CONNECT_TIMEOUT_MS", "10000")),
        appName="SetsuAPI",
    )
    try:
        await new_client.admin.command("ping")
    except Exception:
        new_client.close()
        raise

    client = new_client
    db = client[DB_NAME]
    print(f"Conectado a MongoDB: {DB_NAME}")
    return db


async def init_indexes():
    if db is None:
        raise RuntimeError("DB no inicializada")

    # Crea el índice único solamente si todavía no existe.
    indexes = await db["bonusProduct"].index_information()

    if "code_1" in indexes:
        # El índice existente ya se llama code_1.
        # Verificamos que sea único antes de continuar.
        if not indexes["code_1"].get("unique", False):
            raise RuntimeError(
                "El índice code_1 existe, pero no es único. "
                "Revisá los datos y el índice antes de modificarlo."
            )
    else:
        await db["bonusProduct"].create_index(
            "code",
            unique=True,
            name="code_1"
        )

    print("📌 Índice único verificado en bonusProduct.code")


async def close_db() -> None:
    global client, db
    if client is not None:
        client.close()
    client = None
    db = None
    print("Conexión MongoDB cerrada")


async def get_db() -> AsyncIOMotorDatabase:
    if db is None:
        raise RuntimeError("La base de datos no está inicializada.")
    return db
