FROM python:3.11-slim

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

EXPOSE 5005
EXPOSE 5055

# default command para Web Service: run apenas Rasa
CMD ["bash", "start.sh"]
