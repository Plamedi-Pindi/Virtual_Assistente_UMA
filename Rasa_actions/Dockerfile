FROM rasa/rasa-sdk:3.6.0

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt || true

RUN chmod +x start.sh
CMD ["./start.sh"]
