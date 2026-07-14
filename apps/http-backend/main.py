from fastapi import FastAPI
from v1.config import connectDB
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await connectDB()


@app.get("/")
def health():
    return {"message":"This is a backend service for Kartik portfolio"}

# following is created for uptime monitor
@app.head("/")
async def health_check():
    return JSONResponse(content={"status": "ok"})