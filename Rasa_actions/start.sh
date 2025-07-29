#!/bin/bash

echo "Iniciando action server na porta $PORT"
exec python -m rasa_sdk.endpoint --port ${PORT:-5055}
