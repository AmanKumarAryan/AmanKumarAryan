from fastapi import APIRouter, Depends, UploadFile, File
from v1.service import projectService
from v1.schema import CreateProjectSchema, UpdateProjectSchema
from typing import List
from v1.dependencies import verifyUserDependency

router = APIRouter(prefix="/project", tags=["project"])

service = projectService()


@router.get("/")
async def get_all_projects():
    return await service.getAll()

@router.get("/{project_id}")
async def get_project(project_id: str):
    return await service.getOne(project_id)

@router.post("/")
async def create_project(data: CreateProjectSchema = Depends(CreateProjectSchema.as_form),
                          thumbnailImage: UploadFile = File(...),
                          images: List[UploadFile] = File(...), user = Depends(verifyUserDependency)
                          ):
    return await service.create(data, thumbnailImage, images)

@router.put("/{project_id}")
async def update_project(project_id: str,
                          data: UpdateProjectSchema = Depends(UpdateProjectSchema.as_form),
                          thumbnailImage: UploadFile = File(None),
                          images: List[UploadFile] = File(None), user = Depends(verifyUserDependency)
                          ):
    return await service.update(project_id, data, thumbnailImage, images)

@router.delete("/{project_id}")
async def delete_project(project_id: str, user = Depends(verifyUserDependency)):
    return await service.delete(project_id)