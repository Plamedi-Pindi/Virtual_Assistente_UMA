#!/bin/bash

# echo "Treinando modelo..."
# rasa train

echo "Iniciando Rasa na porta $PORT"

export PATH="/app/.local/bin:$PATH"

# rasa run --enable-api --cors "*" --port ${PORT:-5005 }
rasa run --enable-api --cors "*" --port ${PORT}
