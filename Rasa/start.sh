#!/bin/bash

echo "Iniciando Rasa com porta $PORT"

rasa run --enable-api --cors "*" --port ${PORT}
