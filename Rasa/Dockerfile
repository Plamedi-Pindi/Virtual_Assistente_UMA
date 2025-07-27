# Dockerfile

FROM rasa/rasa:3.6.21  

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

# Treina o modelo ao construir a imagem
RUN rasa train

# Dá permissão de execução ao script de inicialização
RUN chmod +x start.sh

# Comando que roda tanto o servidor de ações quanto o core
CMD ["./start.sh"]

# CMD ["rasa", "run", "--enable-api", "--cors", "*", "--debug", "--port", "8000"]
