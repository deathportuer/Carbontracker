from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from backend import models, database, verifier

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="CarbonTrack API")

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "CarbonTrack API Running"}

@app.post("/submit-footprint/")
def submit_footprint(data: models.FootprintCreate, db: Session = Depends(database.get_db)):
    footprint = models.Footprint(
        user_id=data.user_id,
        activity=data.activity,
        emissions=data.emissions,
        evidence_url=data.evidence_url,
    )
    db.add(footprint)
    db.commit()
    db.refresh(footprint)

    trust_score = verifier.calculate_trust_score(footprint)
    footprint.trust_score = trust_score
    db.commit()

    return {"footprint_id": footprint.id, "trust_score": trust_score}

@app.get("/user/{user_id}")
def get_user_data(user_id: str, db: Session = Depends(database.get_db)):
    user_data = db.query(models.Footprint).filter(models.Footprint.user_id == user_id).all()
    if not user_data:
        raise HTTPException(status_code=404, detail="User not found")
    return user_data
