FROM rasa/rasa:3.6.21-full

USER root
WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt || true

# Dá permissão de execução ao start.sh
RUN chmod +x start.sh

CMD ["./start.sh"]
