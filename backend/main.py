from fastapi import FastAPI
from routers import auth, washrooms, health_centers, feedback
app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(washrooms.router, prefix="/washrooms", tags=["washrooms"])
app.include_router(health_centers.router, prefix="/health-centers", tags=["health-centers"])
app.include_router(feedback.router, prefix="/feedback", tags=["feedback"])
