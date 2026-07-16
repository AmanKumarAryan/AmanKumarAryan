from dotenv import load_dotenv
import os

load_dotenv()

class setting: 
    MONGO_URL = os.getenv("MONGO_URL")
    DATABASE_NAME = os.getenv("DATABASE_NAME")
    IMAGE_KIT_PUBLIC_KEY = os.getenv("IMAGE_KIT_PUBLIC_KEY")
    IMAGE_KIT_PRIVATE_KEY = os.getenv("IMAGE_KIT_PRIVATE_KEY")
    IMAGE_KIT_URL = os.getenv("IMAGE_KIT_URL")