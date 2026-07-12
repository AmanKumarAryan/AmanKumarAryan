from fastapi import FastAPI


app = FastAPI()


@app.get("/")
def health():
    return {"message":"This is a backend service for Kartik portfolio backend"}