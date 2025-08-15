from fastapi import FastAPI
from pydantic import BaseModel
from data_handler import*
from geopy.distance import geodesic
app = FastAPI()

#User oriented backend
class Feedback(BaseModel):
    name: str
    rating: int
    feedback: str

class Report(BaseModel):
    name: str
    report: str

#storing the feedback
@app.post("/feedback")
def get_feedback(feedback: Feedback):
    store_feedback(feedback.model_dump())
    return {"message": "Feedback sent"}

@app.get("/washrooms")
def get_washrooms(lat: float, lon: float, limit: int = 10):
    user_location = (lat, lon)
    washrooms = load_washrooms()
    for w in washrooms:
        w_coords = (w["latitude"], w["longitude"])
        w["distance_km"] = geodesic(user_location, w_coords).km
    sorted_washrooms = sorted(washrooms, key=lambda x: x["distance_km"])
    return sorted_washrooms[:limit]
    
@app.get("/health-centers")
def get_healthcenters(lat: float, lon: float, limit: int = 10):
    user_location = (lat, lon)
    healthcenters = load_healthcenters()
    for h in healthcenters:
        h_coords = (h["latitude"], h["longitude"])
        h["distance_km"] = geodesic(user_location, h_coords).km
    sorted_healthcenters = sorted(healthcenters, key=lambda x: x["distance_km"])
    return sorted_healthcenters[:limit]

@app.post("/report")
def submit_report(report: Report):
    log_issue(report.model_dump())
    return {"message": "Report logged"}

@app.get("/request-categories")
def get_