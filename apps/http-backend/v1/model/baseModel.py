from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class Base(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    description: str = Field(..., min_length=10)

    thumbnailImage: Optional[str] = None
    liveLink: Optional[str] = None

    isActive: bool = True

    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)