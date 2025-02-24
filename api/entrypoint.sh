#!/bin/sh

#Replace {{SERVER_IP}} in every .js file (used if no .env file is passed in docker container)
sed -i 's|{{SERVER_IP}}|'"$SERVER_IP"'|g' /usr/src/app/*.js

#Replace {{SERVER_IP}} in every .js file (used if .env file is passed in docker container)
#When we process .env value with dotenv lib, it is imported when running the file, since we're not building the app
#So we need to change de value directly in .env to avoid issues
sed -i 's|{{SERVER_IP}}|'"$SERVER_IP"'|g' /usr/src/app/.env

#Useful to debug
#exec cat userapi.js

echo "Server IP from docker : $SERVER_IP"

#Launch nginx
exec node ./userapi.js