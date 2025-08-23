from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, washrooms, health_centers, feedback

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(washrooms.router, prefix="/washrooms", tags=["washrooms"])
app.include_router(health_centers.router, prefix="/health-centers", tags=["health-centers"])
app.include_router(feedback.router, prefix="/feedback", tags=["feedback"])


