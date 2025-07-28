#!/bin/sh

echo "Iniciando Rasa com porta $PORT"

# Adiciona caminho onde rasa está instalado à variável PATH
export PATH="/app/.local/bin:$PATH"

# Executa o rasa com o PATH atualizado
rasa run --enable-api --cors "*" --port ${PORT}
