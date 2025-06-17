from typing import Union

from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()


@app.get("/")
def read_root():
    return {"VA": "Hello, I'm UMA's virtual assintent!"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

cursos = [
    {"id":1, "name":"Informatica" },
    {"id":2, "name":"Analises Clinica" },
    {"id":3, "name":"Mecatronica" }
]

@app.get("/cursos/{curso_id}")
def find_course(curso_id: int):
    for curso in cursos:
        if "id" in curso and curso["id"] == curso_id:
            return curso["name"]
        
    return JSONResponse(status_code=404, content={"message": "Curso não encontrado"})
       