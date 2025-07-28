FROM rasa/rasa:3.6.21-full

# Define diretório de trabalho
WORKDIR /app

# Copia todos os arquivos da aplicação para dentro do container
COPY . /app

# (Opcional) Instala dependências extras do requirements.txt
RUN chmod +x start.sh
RUN pip install --upgrade pip && \
    pip install -r requirements.txt || true

# Expõe as portas para Rasa e Custom Actions
EXPOSE 5005
EXPOSE 5055

# Comando que executa tanto o servidor de actions quanto o servidor Rasa
CMD ["/bin/bash", "/app/start.sh"]
