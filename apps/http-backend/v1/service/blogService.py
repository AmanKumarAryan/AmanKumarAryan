from v1.model import blogModel
from v1.config import getDB
from v1.util import log, response
from fastapi import HTTPException, UploadFile
from v1.schema import blogSchema
import re

class blogService:

    def __init__(self):
        self.db = getDB()["BlogModel"]

    async def create(self, data: blogSchema,thumbnailImage: UploadFile):
        try:
            name = data.name.lower()
            name = re.sub(r"[^\w\s-]", "", name)
            words = name.split()

            slug = "-".join(words[:4])

            existingBlog = await self.db.find_one({"name":slug})

            if existingBlog is not None:
                log.info("blog which slug {slug} already exist")
                return HTTPException(
                    status_code=409,
                    detail="blog already exist, please use a different name"
                )

            newBlog = blogModel(
                name=data.name,
                description=data.description,
                thumbnailImage="",
                slug="",
                content=data.content,
                category=data.category,
                tags=data.tags,
                readTime=data.readTime,
                featured=data.featured,
                isActive=data.isActive,
            )

            await self.db.create_one(newBlog.dict())
            log.info("new blog create")
            return response(code=201, message="Blog added successfull")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )

