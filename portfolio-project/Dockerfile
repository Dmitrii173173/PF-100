FROM node:18-alpine

WORKDIR /app

# Установка зависимостей для бэкенда
COPY backend/requirements.txt /app/backend/
RUN apk add --no-cache python3 py3-pip && \
    pip3 install -r /app/backend/requirements.txt

# Копирование файлов бэкенда
COPY backend /app/backend

# Установка зависимостей для фронтенда
COPY frontend/package*.json /app/frontend/
RUN cd /app/frontend && npm install

# Копирование файлов фронтенда
COPY frontend /app/frontend

# Сборка фронтенда
RUN cd /app/frontend && npm run build

# Запуск обоих сервисов
COPY docker-compose.yml /app/
CMD ["docker-compose", "up"] 