import uvicorn

from settings import PORT
from urls import app

if __name__ == "__main__":
    # コンソールで[$ uvicorn run:app --reload --host 0.0.0.0 --port 8000]でも可
    uvicorn.run(app=app, host="0.0.0.0", port=PORT)
