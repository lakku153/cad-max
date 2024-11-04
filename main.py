from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

# Dictionary to map logo names to their corresponding URLs
logo_urls = {
    "github": "https://github.com",
    "facebook": "https://facebook.com",
    "google": "https://google.com",
    "apple": "https://apple.com",
}

@app.get("/api/logos")
async def get_logos():
    return JSONResponse(content=logo_urls)

# Run the application with `uvicorn main:app --reload`
