# Tafseel-al-Qur'an Root Dockerfile
# -------------------------------------------------------------
# NOTE: This Dockerfile builds the BACKEND by default.
# For the full stack (Frontend + Backend + DB), please use:
# >> docker-compose up --build 
# -------------------------------------------------------------

FROM node:18-alpine

RUN apk add --no-cache openssl

WORKDIR /app

# Copy backend package files
COPY ./tafseel-al-quran/server/package*.json ./
COPY ./tafseel-al-quran/server/prisma ./prisma/

# Install dependencies
RUN npm ci --only=production

# Generate Prisma Client for SQLite
RUN npx prisma generate

# Copy backend source
COPY ./tafseel-al-quran/server .

# Expose API port
EXPOSE 5000

# Run migrations and start
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
