#!/bin/bash

echo "Iniciando custom actions na porta 5055..."
rasa run actions --port 5055 &

echo "Iniciando Rasa server na porta $PORT..."
rasa run --enable-api --cors "*" --port $PORT
