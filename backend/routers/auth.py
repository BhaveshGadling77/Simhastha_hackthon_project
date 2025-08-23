from fastapi import APIRouter
from models import Login, Signup
from fastapi import HTTPException
from passlib.hash import bcrypt
from data_handler import*
router = APIRouter()

#storing signup details
@router.post("/sign-up")
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
@router.post("/log-in")
def log_in(details: Login):
    user_data = get_user(details.email) #get_user() searches for the email id and returns the user_data
    if not user_data:
        raise HTTPException(status_code=400, detail="Incorrect username or password.")
    if bcrypt.verify(details.passwrd, user_data["passwrd"]):
        return {"message": "Login Successful"}
    else:
        raise HTTPException(status_code=400, detail="Incorrect username or password.")