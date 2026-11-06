FROM node:22-alpine AS builder
WORKDIR /workspace
COPY . .
RUN npm install
ARG APP_DIR
RUN npm run build --workspace=landing-${APP_DIR}

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
ARG APP_DIR
COPY --from=builder /workspace/${APP_DIR}/out ./out
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
