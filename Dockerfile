FROM node:18-slim
WORKDIR /app
COPY index.html style.css script.js server.js ./
EXPOSE 3000
CMD ["node", "server.js"]