#!/usr/bin/env bash
# inicia Rasa e FastAPI

# Executa servidor de ações (mas em Render rodará no worker separado)
uvicorn app.main:app --host 0.0.0.0 --port 8000 &

# Treina modelo (se necessário) ou usa modelo pré‑treinado
rasa train

# Inicia servidor Rasa
rasa run --enable-api --cors "*" --port $PORT
