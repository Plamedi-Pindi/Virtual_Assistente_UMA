FROM rasa/rasa-sdk:3.6.0

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt || true

# Dá permissão para executar o start.sh
RUN chmod +x start.sh

# Usa o script para iniciar na porta dinâmica
CMD ["./start.sh"]
