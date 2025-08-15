from fastapi import FastAPI
from fastapi import HTTPException
from pydantic import BaseModel
from passlib.hash import bcrypt
from data_handler import*
from geopy.distance import geodesic
app = FastAPI()

#User oriented backend
class Signup(BaseModel):
    username: str
    passwrd: str
    email: str

class Login(BaseModel):
    email: str
    passwrd: str

class Feedback(BaseModel):
    name: str
    rating: int
    feedback: str

class Report(BaseModel):
    name: str
    report: str

#storing signup details
@app.post("/sign-up")
def sign_up(details: Signup):
    if find_user(details.username, "u") is not None: #find_user returns None if username not found
        raise HTTPException(status_code=400, detail="Username already exists.")
    if find_user(details.email, "e") is not None: #find_user returns None if email not found
        raise HTTPException(status_code=400, detail="Email ID already has an account.")
    hash_pw = bcrypt.hash(details.passwrd)
    user_data = details.model_dump()
    user_data["passwrd"] = hash_pw
    store_user_details(user_data)
    return {"message": "User details stored"}

#checking login details
@app.post("/log-in")
def log_in(details: Login):
    user_data = get_user(details.email) #get_user() searches for the email id and returns the user_data
    if not user_data:
        raise HTTPException(status_code=400, detail="Incorrect username or password.")
    if bcrypt.verify(details.passwrd, user_data["passwrd"]):
        return {"message": "Login Successful"}
    else:
        raise HTTPException(status_code=400, detail="Incorrect username or password.")

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

# @app.get("/request-categories")
# def get_
