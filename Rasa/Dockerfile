FROM rasa/rasa:3.6.21-full

# Muda para o diretório de trabalho
WORKDIR /app

# Copia todo o conteúdo do projeto
COPY . /app

# Instala dependências adicionais, se existirem
RUN pip install --no-cache-dir -r requirements.txt || true

# Exponha as portas usadas pelo Rasa e pelo servidor de actions
EXPOSE 5005 5055

# Executa o script de inicialização
CMD ["bash", "start.sh"]
