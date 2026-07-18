from datetime import datetime
from v1.model import blogModel
from v1.config import getDB
from v1.util import log, response
from fastapi import HTTPException, UploadFile
from v1.schema import CreateBlogSchema, blogUpdateSchema
import re
from v1.config import imagekit
from v1.util import getCurrentDateTime

class blogService:
    @property
    async def collection(self):
        return getDB()["BlogModel"]

    async def create(self, data: CreateBlogSchema,thumbnailImage: UploadFile):
        try:
            name = data.name.lower()
            name = re.sub(r"[^\w\s-]", "", name)
            words = name.split()

            slug = "-".join(words[:4])

            existingBlog = await self.collection.find_one({"name":slug})

            if existingBlog is not None:
                log.info("blog which slug {slug} already exist")
                return HTTPException(
                    status_code=409,
                    detail="blog already exist, please use a different name"
                )
            
            # upload the file - 
            file_bytes = await thumbnailImage.read()
            imageResponse = imagekit.upload_file(
                            file=file_bytes,
                            file_name=thumbnailImage.filename,
                            options={
                                "folder": "/blogs"
                            }
                        )

            newBlog = blogModel(
                name=data.name,
                description=data.description,
                thumbnailImage=imageResponse["url"] if imageResponse["url"] else None,
                slug=slug,
                content=data.content,
                category=data.category,
                tags=data.tags,
                readTime=data.readTime,
                featured=data.featured,
                isActive=data.isActive,
            )

            await self.collection.create_one(newBlog.dict())
            log.info("new blog create")
            return response(code=201, message="Blog added successfull")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )

    async def getAll(self):
        try:
            blogs = await self.collection.find_all({})
            log.info("fetched all blogs")
            return response(code=200, message="Blogs fetched successfully", data=blogs)

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )
        
    async def getOne(self, blog_id: str):
        try:
            blog = await self.collection.find_one({"_id": blog_id})

            if blog is None:
                log.info(f"blog with id {blog_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Blog not found"
                )

            log.info(f"fetched blog {blog_id}")
            return response(code=200, message="Blog fetched successfully", data=blog)

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )
        
    async def update(self, blog_id: str, data: blogUpdateSchema, thumbnailImage: UploadFile = None):
        try:
            existingBlog = await self.collection.find_one({"_id": blog_id})

            if existingBlog is None:
                log.info(f"blog with id {blog_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Blog not found"
                )

            updateData = {
                "name": data.name,
                "description": data.description,
                "content": data.content,
                "category": data.category,
                "tags": data.tags,
                "readTime": data.readTime,
                "featured": data.featured,
                "isActive": data.isActive,
                "updated_at": getCurrentDateTime
            }

            if thumbnailImage is not None:
                file_bytes = await thumbnailImage.read()
                imageResponse = imagekit.upload_file(
                    file=file_bytes,
                    file_name=thumbnailImage.filename,
                    options={
                        "folder": "/blogs"
                    }
                )
                updateData["thumbnailImage"] = imageResponse["url"] if imageResponse["url"] else None

            await self.collection.update_one({"_id": blog_id}, {"$set": updateData})
            log.info(f"blog {blog_id} updated")
            return response(code=200, message="Blog updated successfully")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )
        
    async def delete(self, blog_id: str):
        try:
            existingBlog = await self.collection.find_one({"_id": blog_id})

            if existingBlog is None:
                log.info(f"blog with id {blog_id} not found")
                return HTTPException(
                    status_code=404,
                    detail="Blog not found"
                )

            await self.collection.delete_one({"_id": blog_id})
            log.info(f"blog {blog_id} deleted")
            return response(code=200, message="Blog deleted successfully")

        except Exception as e:
            log.error(f"something went wrong = {e}")
            return HTTPException(
                status_code=500,
                detail="Something went wrong, please try again"
            )