FROM rasa/rasa:3.6.21

USER root
WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt || true

# Dá permissão de execução ao start.sh
RUN chmod +x start.sh

# CMD ["./start.sh"]

# Corrige o erro: anula o ENTRYPOINT herdado da imagem base
ENTRYPOINT ["./start.sh"]
