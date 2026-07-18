from fastapi import APIRouter, Depends, UploadFile, File
from v1.service import experienceService
from v1.schema import createExperienceSchema, updateExperienceSchema

router = APIRouter(prefix="/experience", tags=["experience"])


@router.get("/")
async def get_all_experiences():
    return await experienceService.getAll()


@router.get("/{experience_id}")
async def get_experience(experience_id: str):
    return await experienceService.getOne(experience_id)


@router.post("/")
async def create_experience(data: createExperienceSchema = Depends(createExperienceSchema.as_form),
                             companyLogo: UploadFile = File(...)
                             ):
    return await experienceService.create(data, companyLogo)


@router.put("/{experience_id}")
async def update_experience(experience_id: str,
                             data: updateExperienceSchema = Depends(updateExperienceSchema.as_form),
                             companyLogo: UploadFile = File(None)
                             ):
    return await experienceService.update(experience_id, data, companyLogo)


@router.delete("/{experience_id}")
async def delete_experience(experience_id: str):
    return await experienceService.delete(experience_id)