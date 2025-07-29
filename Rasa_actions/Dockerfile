FROM rasa/rasa-sdk:3.6.0

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt || true

CMD ["sh", "-c", "python -m rasa_sdk.endpoint --port ${PORT:-5055}"]
