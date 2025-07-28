#!/bin/bash

# Adiciona o local de instalação do Rasa ao PATH (necessário no container)
export PATH="/app/.local/bin:$PATH"
export PATH="/root/.local/bin:$PATH"

echo "Iniciando custom actions na porta 5055..."
rasa run actions --port 5055 &

echo "Iniciando Rasa server na porta $PORT..."
rasa run --enable-api --cors "*" --port $PORT
