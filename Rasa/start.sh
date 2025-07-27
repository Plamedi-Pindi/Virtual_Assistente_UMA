#!/bin/bash

# Ativa o venv
. ./venv/bin/activate

# Inicia o servidor de ações personalizado em segundo plano
rasa run actions --port 5055 &

# Inicia o servidor principal do Rasa usando a porta exigida pela Render
rasa run --enable-api --cors "*" --debug --port $PORT
