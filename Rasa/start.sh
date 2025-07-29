#!/bin/bash

echo "Iniciando Rasa na porta $PORT"

export PATH="/app/.local/bin:$PATH"

# Inicializa Rasa e a API
rasa run \
  --enable-api \
  --cors "*" \
  --port ${PORT:-5005}
