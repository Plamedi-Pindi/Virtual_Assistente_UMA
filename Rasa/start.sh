#!/bin/bash

# Ativa o ambiente virtual
. ./venv/bin/activate

# Inicia o servidor de ações personalizado em segundo plano
rasa run actions --port 5055 &

# Inicia o servidor principal do Rasa com canal REST ativado e usando a porta exigida pela Render
rasa run \
  --enable-api \
  --cors "*" \
  --debug \
  --port $PORT \
  --credentials credentials.render.yml
