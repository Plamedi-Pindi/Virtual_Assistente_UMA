#!/bin/bash

export PATH="/root/.local/bin:$PATH"

echo "Verificando se Rasa está disponível..."
which rasa || echo "Rasa não encontrado no PATH"

echo "Iniciando custom actions..."
rasa run actions --port 5055 &

echo "Iniciando Rasa server..."
rasa run --enable-api --cors "*" --port ${PORT:-5005}
