from .baseModel import Base
from typing import Optional
from datetime import date

class ExperienceBase(Base):
    company: str
    position: str
    employmentType: str
    location: str
    startDate: date
    endDate: Optional[date] = None
    currentlyWorking: bool = False
    companyLogo: Optional[str] = None
    responsibilities: list[str] = []
    isActive: bool = True


    
    