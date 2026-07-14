from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI
from .setting import setting

client = None
db = None


async def connectDB():
    global client, db
    client = AsyncIOMotorClient(setting.MONGO_URL)
    db = client[setting.DATABASE_NAME]
    print("Connected to MongoDB!")


def getDB():
    if db is None:
        raise Exception("DB not connected yet!")
    return db


async def disconnectDB():
    global client
    if client:
        client.close()
        print("🛑 MongoDB connection closed")
