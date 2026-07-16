from fastapi import APIRouter, HTTPException, Depends, UploadFile, File
from v1.service import blogService
from v1.schema import CreateBlogSchema

router = APIRouter(prefix="/blog", tags=["blog"])


@router.get("/")
async def get_all_blogs():
    return {thanks}


@router.get("/{blog_id}")
async def get_blog(blog_id: str):
    return {"message": f"Get blog {blog_id}"}


@router.post("/")
async def create_blog(data: CreateBlogSchema = Depends(CreateBlogSchema.as_form),
                      thumbnailImage: UploadFile = File(...)
                      ):
    return blogService.create(data,thumbnailImage)


@router.put("/{blog_id}")
async def update_blog(blog_id: str):
    return {"message": f"Update blog {blog_id}"}


@router.delete("/{blog_id}")
async def delete_blog(blog_id: str):
    return {"message": f"Delete blog {blog_id}"}