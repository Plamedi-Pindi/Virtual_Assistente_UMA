from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
# from thefuzz import fuzz
# from thefuzz import process
from rapidfuzz import fuzz, process
from typing import List

import unicodedata

from db.database import db   # Import database

router = APIRouter()

# Functin to get courses
async def get_courses_licenciatura():
    datas_cursor = db.cursos.find({})
    datas = await datas_cursor.to_list(length=None)
    
    cursos = []       
    for data in datas:
            data["_id"] = str(data["_id"])
            
            if "tipo" in data and data["tipo"] == "Licenciatura":
                 if "cursos" in data and isinstance(data["cursos"], list):
                     cursos.extend(data["cursos"])
            
    return cursos


@router.get("/cursos")
async def get_data():
    cursos_cursor = db.cursos.find({})
    cursos = await cursos_cursor.to_list(length=None)
    
    for curso in cursos:
        curso["_id"] = str(curso["_id"])
        
    return cursos

@router.get("/cursosinfo")
async def find_curso(termo: str = Query(..., min_length=1)) :
    termo = termo.strip().lower()
    
    cursos = await get_courses_licenciatura()
    curso_nomes = [curso["nome"] for curso in cursos]
    # variavel para armazenar o resultado
    queryResult = []
    
    # Busca exata
    for curso in curso_nomes:
        if termo == curso.lower():
            queryResult = [curso]
    
     # Busca parcial (contendo o termo)
    resultados = [curso for curso in curso_nomes if termo in curso.lower()]
    if resultados:
        queryResult = resultados
    
        # Busca fuzzy com threshold (semelhante)
    resultados_fuzzy = process.extract(
        termo,
        curso_nomes,
        scorer=fuzz.partial_ratio,
        limit=5  # Retorna até 5 resultados similares
    )   
    
     # Filtra resultados com similaridade acima de 60
    resultados_filtrados = [match for match, score, _ in resultados_fuzzy if score >= 60]
    
    queryResult = resultados_filtrados 
    
    
    if queryResult and len(queryResult) == 1:    
        response = None
        for curso in cursos:
            if "nome" in curso and curso["nome"] == queryResult[0]:
                response = {
                    "status": 200,
                    "isList": False,
                    "curso": curso["nome"],
                    "details": curso["descricao"]
                }
        return response
    if  queryResult and len(queryResult) > 1:
        response = {
            "status": 200,
            "isList": True,
            "cursos": queryResult
        }
        return response
    
    else:
        response = {
            "status": 200,
            "curso": False,
            "message": "Nenhum curso semelhante encontrado."
        }
        return response
    