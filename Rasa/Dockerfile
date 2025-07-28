FROM rasa/rasa:3.6.21-full

USER root
WORKDIR /app

COPY . /app

# Copie dependências extras (caso tenha bibliotecas adicionais)
RUN pip install --no-cache-dir -r requirements.txt || true

EXPOSE 5005
EXPOSE 5055

CMD ["bash", "start.sh"]
