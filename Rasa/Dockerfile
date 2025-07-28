FROM rasa/rasa:3.6.21-full


USER root
WORKDIR /app

COPY . /app

# Instala dependências extras, se necessário
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE $PORT

USER 1001
CMD ["sh", "-c", "rasa run --enable-api --cors '*' --port ${PORT}"]


