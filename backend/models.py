from pydantic import BaseModel, Field

class Signup(BaseModel):
    username: str
    passwrd: str
    email: str

class Login(BaseModel):
    email: str
    passwrd: str

class PaginationParams(BaseModel):
    skip: int = Field(0, ge = 0)
    limit: int = Field(3, gt = 0)

class Feedback(BaseModel):
    name: str
    rating: int
    feedback: str