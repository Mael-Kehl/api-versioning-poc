# Import node image
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Only copy package.json and package-lock.json to optimize docker cache
COPY package*.json ./

# Install dependencies
RUN npm install 

#Copy the rest of the project
COPY . .

# Build project
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/app/dist .

COPY entrypoint.sh ./entrypoint.sh

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

