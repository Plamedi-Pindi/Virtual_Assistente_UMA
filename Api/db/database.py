from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv() # Carrega variáveis do .env

MONGO_URL = os.getenv("MONGO_URL")
MONGO_NAME = os.getenv("MONGO_NAME")
client = AsyncIOMotorClient(MONGO_URL)
db = client[MONGO_NAME]

