# API Versioning Proof Of Concept

# Intro

This PoC demonstrates the impact of api versioning on the client side and the importance of retro-compatibility. 
The app shows how data is rendered and why it may cause a breaking change, wether data structure or content is changed. 

Version naming : vX.Y.Z
- X : Breaking change
- Y : Retro-compatible change (ex: new feature)
- Z : bug fix

The **.breaking** routes means the data have been changed, which leads to a breaking change. 
The normal versioned rutes means the data structure has changed. 

# Run project

```sh
docker-compose up -d 
```

# API

With docker, you can either : 
- Use .env + docker-compose.yml environment
- Use only docker-compose.yml environment

Without docker, you have to use a .env file at the root of the project

## Run with .env (recommanded for dev)

If you wish to run api (**/api**) without docker for test purposes : 

### Configuration

```sh
npm install
```

```sh
cp .env.example .env 
```

.env : 

```sh
# default value (localhost)
SERVER_HOST_IP=127.0.0.1
```

### Run

```sh
nodemon userapi.js
```

## Run with docker and .env (prod/dev)

If you wish to run api with docker and a .env file : 

### Configuration

```sh
cp .env.example .env 
```

.env : 

```sh
SERVER_HOST_IP={{SERVER_IP}}
```

docker-compose.yml :
```yml
[...]
environment:
    SERVER_IP: 0.0.0.0 #Default value (docker interface)
[...]
```

### Run (alone)

```sh
docker-compose up backend-poc-api -d
```

## Run with docker and no .env (prod)

### Configuration

If you wish to run api with docker and no .env file (easier): 

docker-compose.yml :
```yml
[...]
environment:
    SERVER_IP: 0.0.0.0 #Default value (docker interface)
[...]
```

### Run (alone)

```sh
docker-compose up backend-poc-api -d
```

# Frontend 

With docker, you can either : 
- Use .env + docker-compose.yml environment
- Use only docker-compose.yml environment

Without docker, you have to use a .env file at the root of the project

## Run with .env (recommanded for dev)

If you wish to run client side (**/client**) without docker for test purposes : 

### Configuration

```sh
npm install
```

```sh
cp .env.example .env 
```

.env : 

```sh
# default value (localhost on port 3000)
VITE_API_URL=http://127.0.0.1:3000
```

### Run

```sh
npm run dev
```

## Run with docker and .env (prod/dev)

If you wish to run client side with docker and a .env file : 

### Configuration

```sh
cp .env.example .env 
```

.env : 

```sh
VITE_API_URL={{BACKEND_URL}}
```

docker-compose.yml :
```yml
[...]
environment:
    BACKEND_URL: http://127.0.0.1:3000 #Default value
[...]
```

### Run (alone)

```sh
docker-compose up frontend-poc-api -d
```


## Run with docker and no .env (prod)

### Configuration

If you wish to run client side with docker and no .env file (easier): 

docker-compose.yml :
```yml
[...]
environment:
    BACKEND_URL: http://127.0.0.1:3000 #Default value
[...]
```

### Run (alone)

```sh
docker-compose up frontend-poc-api -d
```