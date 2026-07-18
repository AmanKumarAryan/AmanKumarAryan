from typing import Optional
from datetime import date
from fastapi import Form

class createExperienceSchema():
    description: str
    company: str
    position: str
    employmentType: str
    location: str
    startDate: date
    endDate: Optional[date] = None
    currentlyWorking: bool = False
    companyLogo: Optional[str] = None

    @classmethod
    def as_form(
        cls,
        description: str = Form(...),
        company: str = Form(...),
        position: str = Form(...),
        employmentType: str = Form(...),
        location: str = Form(...),
        startDate: date = Form(...),
        endDate: Optional[date] = Form(...),
        currentlyWorking: bool = Form(...),
        companyLogo: Optional[str] = Form(...),
    ):
        return cls(
            description=description,
            company=company,
            position=position,
            employmentType=employmentType,
            location=location,
            startDate=startDate,
            endDate=endDate,
            currentlyWorking=currentlyWorking,
            companyLogo=companyLogo,
        )
    
class updateExperienceSchema(createExperienceSchema):
    pass