#!/bin/bash

echo "Verificando onde está o Rasa..."
which rasa || echo "Rasa não está no PATH"

echo "Iniciando servidor de custom actions na porta 5055..."
/usr/local/bin/rasa run actions --port 5055 &

echo "Iniciando servidor Rasa na porta $PORT..."
/usr/local/bin/rasa run --enable-api --cors "*" --port $PORT