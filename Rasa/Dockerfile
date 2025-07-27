# Dockerfile

# Imagem base do Rasa
FROM rasa/rasa:3.6.21

# Define o diretório de trabalho
WORKDIR /app

# Copia todos os arquivos do contexto atual para o container
COPY . /app

# Cria um ambiente virtual
RUN python -m venv /app/venv

# Ativa o ambiente virtual e instala as dependências
RUN /bin/bash -c "source /app/venv/bin/activate && pip install --upgrade pip && pip install -r /app/requirements.txt"

# Treina o modelo
RUN rasa train

# Comando de inicialização
CMD ["/bin/bash", "./start.sh"]
