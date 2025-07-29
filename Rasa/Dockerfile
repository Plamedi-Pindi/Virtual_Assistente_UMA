# Usa imagem oficial do Rasa com tudo pronto
FROM rasa/rasa:3.6.21-full

# Torna-se root para copiar arquivos e instalar dependências
USER root

# Define diretório de trabalho
WORKDIR /app

# Copia todo o conteúdo da aplicação
COPY . /app

# Instala dependências adicionais
RUN pip install --no-cache-dir -r requirements.txt

# Permite execução do script de inicialização
RUN chmod +x /app/start.sh

# Expõe as portas usadas pelo Rasa e Actions
EXPOSE 5005
EXPOSE 5055

# Executa o script
CMD ["/app/start.sh"]
