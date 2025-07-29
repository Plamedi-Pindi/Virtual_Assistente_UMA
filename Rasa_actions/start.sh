#!/bin/sh
echo "PORT = $PORT"
exec python -m rasa_sdk.endpoint --port $PORT
