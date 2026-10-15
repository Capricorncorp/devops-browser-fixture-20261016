FROM node:22-alpine
WORKDIR /app
COPY server.cjs /app/server.cjs
USER node
EXPOSE 3000
CMD ["node", "/app/server.cjs"]
