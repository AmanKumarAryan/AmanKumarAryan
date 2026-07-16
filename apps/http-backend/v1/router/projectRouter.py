from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/project", tags=["project"])


@router.get("/")
async def get_all_projects():
    return {"message": "Get all projects"}


@router.get("/{project_id}")
async def get_project(project_id: str):
    return {"message": f"Get project {project_id}"}


@router.post("/")
async def create_project():
    return {"message": "Create project"}


@router.put("/{project_id}")
async def update_project(project_id: str):
    return {"message": f"Update project {project_id}"}


@router.delete("/{project_id}")
async def delete_project(project_id: str):
    return {"message": f"Delete project {project_id}"}