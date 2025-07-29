#!/bin/bash

echo "Verificando se Rasa está disponível..."
which rasa || echo "rasa não encontrado no PATH"

echo "Iniciando custom actions..."
rasa run actions --port 5055 &

echo "Iniciando Rasa server..."
rasa run --enable-api --cors "*" --port ${PORT:-5005}
