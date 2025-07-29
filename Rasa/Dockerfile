FROM python:3.11-slim

# Atualiza PATH para instalar binaries pip --user
ENV PATH="/root/.local/bin:$PATH"

# Define diretório de trabalho
WORKDIR /app

# Copia todos os arquivos da aplicação para dentro do container
COPY . /app

# Instala dependências
RUN pip install --upgrade pip && \
    pip install --user rasa==3.6.21 rasa-sdk==3.6.2 && \
    pip install --user -r requirements.txt || true

# Expõe as portas para Rasa e Custom Actions
EXPOSE 5005
EXPOSE 5055

# Comando que executa tanto o servidor de actions quanto o servidor Rasa
CMD ["/bin/bash", "/app/start.sh"]
