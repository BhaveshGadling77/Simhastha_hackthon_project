from fastapi import APIRouter
from models import Feedback
from data_handler import*
router = APIRouter()

#storing the feedback
@router.post("/feedback")
def get_feedback(feedback: Feedback):
    store_feedback(feedback.model_dump())
    return {"message": "Feedback sent"}
