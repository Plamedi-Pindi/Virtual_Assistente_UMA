FROM rasa/rasa-sdk:3.6.0

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt || true

# Substitui o entrypoint da imagem rasa-sdk
ENTRYPOINT []

CMD ["sh", "-c", "python -m rasa_sdk.endpoint --port ${PORT:-5055}"]
