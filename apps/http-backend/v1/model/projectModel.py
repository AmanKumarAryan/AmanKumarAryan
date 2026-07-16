from .baseModel import Base
from typing import Optional

class projectModel(Base):
    githubLink: Optional[str] = None
    demoVideo: Optional[str] = None
    technologies: list[str]
    images: list[str] = []
    category: str
    featured: bool = False
    displayOrder: int = 0

    
    