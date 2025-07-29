FROM rasa/rasa:3.6.21-full

USER root
WORKDIR /app
COPY . /app

# Instale as libs extras do requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

RUN chmod +x /app/start.sh

EXPOSE 5005 5055

CMD ["/bin/bash", "/app/start.sh"]
