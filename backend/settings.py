import os
from os.path import dirname, join

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware

load_dotenv(verbose=True)

dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path)

TO_EMAIL = os.environ.get("TO_EMAIL")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")
PORT = int(os.environ.get("PORT", 8000))

app = FastAPI()

# Static File
app.mount("/static", StaticFiles(directory="../static"), name="static")

# CORSを回避するために追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.environ.get("ALLOW_ORIGINS").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
