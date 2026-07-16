from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/experience", tags=["experience"])


@router.get("/")
async def get_all_experiences():
    return {"message": "Get all experiences"}


@router.get("/{experience_id}")
async def get_experience(experience_id: str):
    return {"message": f"Get experience {experience_id}"}


@router.post("/")
async def create_experience():
    return {"message": "Create experience"}


@router.put("/{experience_id}")
async def update_experience(experience_id: str):
    return {"message": f"Update experience {experience_id}"}


@router.delete("/{experience_id}")
async def delete_experience(experience_id: str):
    return {"message": f"Delete experience {experience_id}"}