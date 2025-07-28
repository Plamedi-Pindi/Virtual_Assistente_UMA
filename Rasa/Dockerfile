FROM python:3.10-slim

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    curl \
    git \
    && apt-get clean

# USER root
WORKDIR /app

COPY . /app

# Copie dependências extras (caso tenha bibliotecas adicionais)
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt || true

EXPOSE 5005
EXPOSE 5055

CMD ["bash", "start.sh"]
