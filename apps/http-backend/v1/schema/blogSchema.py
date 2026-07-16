from fastapi import Form
from pydantic import BaseModel, field_validator
from typing import List, Optional

class CreateBlogSchema(BaseModel):
    name: str
    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        words = value.strip().split()

        if len(words) < 4:
            raise ValueError("Blog title must contain at least 4 words.")

        return value
    
    description: str
    content: str
    category: str
    tags: List[str]

    @classmethod
    def as_form(
        cls,
        name: str = Form(...),
        description: str = Form(...),
        content: str = Form(...),
        category: str = Form(...),
        readTime: Optional[int] = Form(...),
        featured: Optional[bool] = Form(...),
        isActive: Optional[bool] = Form(...),
        tags: List[str] = Form([]),
    ):
        return cls(
            title=name,
            description=description,
            content=content,
            readTime=readTime,
            featured=featured,
            category=category,
            isActive=isActive,
            tags=tags,
        )