from .baseModel import Base
from typing import Optional
from datetime import datetime

class BlogBase(Base):
    shortDescription: str
    thumbnailImage: str
    slug: str
    content: str
    category: str
    tags: list[str] = []
    author: str = "Kartik Sharma"
    readTime: int = 5
    featured: bool = False
    publishedAt: Optional[datetime] = None
    views: int = 0
    isActive: bool = True