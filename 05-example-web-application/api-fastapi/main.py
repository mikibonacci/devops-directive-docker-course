from database.db import get_time
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def provide_time():
    return {
        "api": "fastapi",
        "now": get_time(),
    }