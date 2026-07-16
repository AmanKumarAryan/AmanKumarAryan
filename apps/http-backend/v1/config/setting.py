from dotenv import load_dotenv
import os

load_dotenv()

class setting: 
    MONGO_URL = os.getenv("MONGO_URL")
    DATABASE_NAME = os.getenv("DATABASE_NAME")