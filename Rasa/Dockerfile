FROM python:3.10-slim

ENV PATH="/root/.local/bin:$PATH"

WORKDIR /app

COPY . /app

RUN pip install --upgrade pip && \
    pip install rasa==3.6.21 rasa-sdk==3.6.2 && \
    pip install -r requirements.txt

RUN chmod +x /app/start.sh

EXPOSE 5005
EXPOSE 5055

CMD ["/app/start.sh"]
