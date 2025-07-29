FROM rasa/rasa-sdk:3.6.0

USER root

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

ENTRYPOINT []

CMD ["sh", "-c", "python -m rasa_sdk.endpoint --port ${PORT}"]
