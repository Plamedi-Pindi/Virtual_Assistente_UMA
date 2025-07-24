from typing import Union

from fastapi import FastAPI
from routers import cursos

app = FastAPI()

app.include_router(cursos.router)

# @app.get("/cursos/{curso_id}")
# def find_cursos(curso_id: int):
#     for curso in cursos:
#         if "id" in curso and curso["id"] == curso_id:
#             return curso["nome"]

#     return JSONResponse(status_code=404, content={"message": "Curso não encontrado"})