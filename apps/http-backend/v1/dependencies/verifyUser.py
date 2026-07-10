from fastapi import Header, HTTPException

def verifyUserDependency(authorization: str = Header(...)):
    if authorization is None or not authorization.startswith("Bearer "):
         raise HTTPException(status_code=401, detail="Invalid or missing Token")
    
    
