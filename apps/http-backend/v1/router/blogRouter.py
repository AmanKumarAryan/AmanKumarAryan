from fastapi import APIRouter, HTTPException, Depends, UploadFile, File
from v1.service import blogService
from v1.schema import CreateBlogSchema, blogUpdateSchema

router = APIRouter(prefix="/blog", tags=["blog"])


@router.get("/")
async def get_all_blogs():
    return blogService.getAll()


@router.get("/{blog_id}")
async def get_blog(blog_id: str):
    return blogService.getOne(blog_id)


@router.post("/")
async def create_blog(data: CreateBlogSchema = Depends(CreateBlogSchema.as_form),
                      thumbnailImage: UploadFile = File(...)
                      ):
    return blogService.create(data,thumbnailImage)


@router.put("/{blog_id}")
async def update_blog(blog_id: str,data: blogUpdateSchema = Depends(CreateBlogSchema.as_form),
                      thumbnailImage: UploadFile = File(...)):
    return blogService.update(blog_id,data,thumbnailImage)


@router.delete("/{blog_id}")
async def delete_blog(blog_id: str):
    return blogService.delete(blog_id)