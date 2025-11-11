from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
from pydantic import BaseModel

Base = declarative_base()

class Footprint(Base):
    __tablename__ = "footprints"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    activity = Column(String)
    emissions = Column(Float)
    evidence_url = Column(String)
    trust_score = Column(Float, default=0.0)
    timestamp = Column(DateTime, default=datetime.utcnow)

class FootprintCreate(BaseModel):
    user_id: str
    activity: str
    emissions: float
    evidence_url: str | None = None
