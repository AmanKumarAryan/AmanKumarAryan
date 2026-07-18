from datetime import datetime
from v1.model import ExperienceModel
from v1.config import getDB
from v1.util import log, response
from fastapi import HTTPException, UploadFile
from v1.schema import createExperienceSchema, updateExperienceSchema
from v1.config import imagekit
from v1.util import getCurrentDateTime

class experienceService:
    @property
    async def collection(self):
        return getDB()["ExperienceModel"]

    async def create(self, data: createExperienceSchema,companyLogo: UploadFile):
        try:
            existingExperience = await self.collection.find_one({"name":data.company})

            if existingExperience is not None:
                log.info("company experience {data.company} already exist")
                return HTTPException(
                    status_code=409,
                    detail="Experience already exist, please use a different name"
                )
            
            # upload the file - 
            file_bytes = await companyLogo.read()
            imageResponse = imagekit.upload_file(
                            file=file_bytes,
                            file_name=companyLogo.filename,
                            options={
                                "folder": "/company"
                            }
                        )

            newExperience = ExperienceModel(
                description=data.description,
                company=data.company,
                position=data.position,
                employmentType=data.employmentType,
                location=data.location,
                startDate=data.startDate,
                endDate=data.endDate,
                currentlyWorking=data.currentlyWorking,
                companyLogo=imageResponse["url"] if imageResponse["url"] else None,
            )

            await self.collection.create_one(newExperience.dict())
            log.info("new experience create")
            return response(code=201, message="experience added successfull")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )

    async def getAll(self):
        try:
            experiences = await self.collection.find_all({})
            log.info("fetched all experiences")
            return response(code=200, message="Experiences fetched successfully", data=experiences)

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )
        
    async def getOne(self, experience_id: str):
        try:
            experience = await self.collection.find_one({"_id": experience_id})

            if experience is None:
                log.info(f"experience with id {experience_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Experience not found"
                )

            log.info(f"fetched experience {experience_id}")
            return response(code=200, message="Experience fetched successfully", data=experience)

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )
        
    async def update(self, experience_id: str, data: updateExperienceSchema, companyLogo: UploadFile = None):
        try:
            existingExperience = await self.collection.find_one({"_id": experience_id})

            if existingExperience is None:
                log.info(f"experience with id {experience_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Experience not found"
                )

            updateData = {
                "description": data.description,
                "company": data.company,
                "position": data.position,
                "employmentType": data.employmentType,
                "location": data.location,
                "startDate": data.startDate,
                "endDate": data.endDate,
                "currentlyWorking": data.currentlyWorking,
                "updated_at": getCurrentDateTime()
            }

            if companyLogo is not None:
                file_bytes = await companyLogo.read()
                imageResponse = imagekit.upload_file(
                    file=file_bytes,
                    file_name=companyLogo.filename,
                    options={
                        "folder": "/company"
                    }
                )
                updateData["companyLogo"] = imageResponse["url"] if imageResponse["url"] else None

            await self.collection.update_one({"_id": experience_id}, {"$set": updateData})
            log.info(f"experience {experience_id} updated")
            return response(code=200, message="Experience updated successfully")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )
        
    async def delete(self, experience_id: str):
        try:
            existingExperience = await self.collection.find_one({"_id": experience_id})

            if existingExperience is None:
                log.info(f"experience with id {experience_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Experience not found"
                )

            await self.collection.delete_one({"_id": experience_id})
            log.info(f"experience {experience_id} deleted")
            return response(code=200, message="Experience deleted successfully")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )