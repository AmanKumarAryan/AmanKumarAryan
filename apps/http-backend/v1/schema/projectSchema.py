from typing import Optional, List
from pydantic import Field
from fastapi import Form

class CreateProjectSchema():
    name: str = Field(..., min_length=2, max_length=100)
    description: str = Field(..., min_length=10)
    liveLink: Optional[str] = None
    isActive: bool = True
    githubLink: Optional[str] = None
    technologies: list[str]
    category: str
    featured: bool = False
    displayOrder: int = 0

    @classmethod
    def as_form(
        cls,
        name: str = Form(...),
        description: str = Form(...),
        liveLink: str = Form(...),
        isActive: bool = Form(...),
        githubLink: Optional[str] = Form(...),
        technologies: Optional[List[str]] = Form(...),
        category: str = Form(...),
        featured: bool = Form(...),
        displayOrder: int = Form(...),
    ):
        return cls(
            title=name,
            description=description,
            liveLink=liveLink,
            isActive=isActive,
            githubLink=githubLink,
            technologies=technologies,
            category=category,
            featured=featured,
            displayOrder=displayOrder,
        )


class UpdateProjectSchema(CreateProjectSchema):
    pass
