from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import models
import database
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модели Pydantic
class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: str
    github_url: str

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class ContactMessageBase(BaseModel):
    name: str
    email: str
    message: str

class ContactMessageCreate(ContactMessageBase):
    pass

class ContactMessage(ContactMessageBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

# Роуты для проектов
@app.get("/api/projects", response_model=List[Project])
def get_projects(db: Session = Depends(database.get_db)):
    projects = db.query(models.Project).all()
    return projects

@app.post("/api/projects", response_model=Project)
def create_project(project: ProjectCreate, db: Session = Depends(database.get_db)):
    db_project = models.Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

# Роуты для контактных сообщений
@app.post("/api/contact", response_model=ContactMessage)
def create_contact_message(message: ContactMessageCreate, db: Session = Depends(database.get_db)):
    db_message = models.ContactMessage(**message.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

@app.get("/")
def root():
    return {"message": "Welcome to Portfolio API"} 