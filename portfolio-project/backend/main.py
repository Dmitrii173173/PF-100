from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from pathlib import Path

app = FastAPI()

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене замените на конкретные домены
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
async def root():
    return {"message": "Welcome to Portfolio API"}

@app.get("/projects")
async def get_projects():
    projects_path = Path("data/projects.json")
    if not projects_path.exists():
        return []
    with open(projects_path) as f:
        return json.load(f)

@app.post("/contact")
async def send_message(form: ContactForm):
    # В реальном приложении здесь можно добавить сохранение в базу данных
    print(f"Сообщение от {form.name} <{form.email}>: {form.message}")
    return {"status": "ok", "message": "Сообщение отправлено!"} 