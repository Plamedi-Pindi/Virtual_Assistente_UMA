#!/bin/bash

echo "Verificando se Rasa está disponível..."
which rasa || echo "rasa não encontrado no PATH"

echo "Iniciando custom actions..."
/usr/local/bin/rasa run actions --port 5055 &

echo "Iniciando Rasa server..."
/usr/local/bin/rasa run --enable-api --cors "*" --port ${PORT:-5005}