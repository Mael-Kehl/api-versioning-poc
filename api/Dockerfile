# Import node image
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Only copy package.json and package-lock.json to optimize docker cache
COPY package*.json ./

# Install dependencies
RUN npm install 

#Copy the rest of the project
COPY . .

COPY entrypoint.sh ./entrypoint.sh

RUN chmod +x ./entrypoint.sh

CMD ["./entrypoint.sh"]
