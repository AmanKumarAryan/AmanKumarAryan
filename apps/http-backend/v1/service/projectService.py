from v1.model import ProjectModel
from v1.config import getDB
from v1.util import log, response
from fastapi import HTTPException, UploadFile
from v1.schema import CreateProjectSchema, UpdateProjectSchema
from v1.config import imagekit
from v1.util import getCurrentDateTime
from typing import List

class projectService:
    @property
    async def collection(self):
        return getDB()["ProjectModel"]

    async def create(self, data: CreateProjectSchema,thumbnailImage: UploadFile, images: List[UploadFile]):
        try:
            # upload the file - 
            file_bytes = await thumbnailImage.read()
            imageResponse = imagekit.uploads.upload(
                            file=file_bytes,
                            file_name=thumbnailImage.filename,
                            options={
                                "folder": "/projects"
                            }
                        )
            
            imagesUrls = []
            if len(images) > 0:
                for image in images:
                    file_bytes = await image.read()
                    imageRes = imagekit.uploads.upload(
                                file=file_bytes,
                                file_name=thumbnailImage.filename,
                                options={
                                    "folder": "/projects/images"
                                }
                            )
                    imagesUrls.append(imageRes["url"])
                log.info(f"{len(images)} are uploaded")

            newProject = ProjectModel(
                name=data.name,
                description=data.description,
                thumbnailImage=imageResponse["url"] if imageResponse["url"] else None,
                githubLink=data.githubLink,
                technologies=data.technologies,
                images=imagesUrls,
                category=data.category,
                featured=data.featured,
                displayOrder=data.displayOrder,
                liveLink=data.liveLink,
                isActive=data.isActive,
            )

            await self.collection.create_one(newProject.dict())
            log.info("new project created")
            return response(code=201, message="Project added successfull")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )

    async def getAll(self):
        try:
            projects = await self.collection.find_all({})
            log.info("fetched all projects")
            return response(code=200, message="Projects fetched successfully", data=projects)

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )

    async def getOne(self, project_id: str):
        try:
            project = await self.collection.find_one({"_id": project_id})

            if project is None:
                log.info(f"project with id {project_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Project not found"
                )

            log.info(f"fetched project {project_id}")
            return response(code=200, message="Project fetched successfully", data=project)

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )

    async def update(self, project_id: str, data: UpdateProjectSchema, thumbnailImage: UploadFile = None, images: List[UploadFile] = None):
        try:
            existingProject = await self.collection.find_one({"_id": project_id})

            if existingProject is None:
                log.info(f"project with id {project_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Project not found"
                )

            updateData = {
                "name": data.name,
                "description": data.description,
                "githubLink": data.githubLink,
                "technologies": data.technologies,
                "category": data.category,
                "featured": data.featured,
                "displayOrder": data.displayOrder,
                "liveLink": data.liveLink,
                "isActive": data.isActive,
                "updated_at": getCurrentDateTime(),
            }

            if thumbnailImage is not None:
                file_bytes = await thumbnailImage.read()
                imageResponse = imagekit.uploads.upload(
                    file=file_bytes,
                    file_name=thumbnailImage.filename,
                    options={
                        "folder": "/projects"
                    }
                )
                updateData["thumbnailImage"] = imageResponse["url"] if imageResponse["url"] else None

            if images is not None and len(images) > 0:
                imagesUrls = []
                for image in images:
                    file_bytes = await image.read()
                    imageRes = imagekit.uploads.upload(
                        file=file_bytes,
                        file_name=image.filename,
                        options={
                            "folder": "/projects"
                        }
                    )
                    imagesUrls.append(imageRes["url"])
                updateData["images"] = imagesUrls

            await self.collection.update_one({"_id": project_id}, {"$set": updateData})
            log.info(f"project {project_id} updated")
            return response(code=200, message="Project updated successfully")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )

    async def delete(self, project_id: str):
        try:
            existingProject = await self.collection.find_one({"_id": project_id})

            if existingProject is None:
                log.info(f"project with id {project_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Project not found"
                )

            await self.collection.delete_one({"_id": project_id})
            log.info(f"project {project_id} deleted")
            return response(code=200, message="Project deleted successfully")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )