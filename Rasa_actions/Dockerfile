FROM rasa/rasa-sdk:3.6.0

WORKDIR /app

COPY . /app

# Instala dependências com permissão de usuário
RUN pip install --user -r requirements.txt

# Evita conflitos com entrypoint da imagem rasa-sdk
ENTRYPOINT []

# Inicia o servidor na porta dinâmica definida pelo Railway
CMD ["sh", "-c", "python -m rasa_sdk.endpoint --port ${PORT:-5055}"]
