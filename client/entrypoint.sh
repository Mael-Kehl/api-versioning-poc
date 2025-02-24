#!/bin/sh
#Replace {{BACKEND_URL}} in every .js file (used if .env file is passed in docker container)
sed -i 's|{{BACKEND_URL}}|'"$BACKEND_URL"'|g' /usr/share/nginx/html/assets/*.js

#Replace {{BACKEND_URL}} in .html file (used if no .env file is passed in docker container)
sed -i 's|{{BACKEND_URL}}|'"$BACKEND_URL"'|g' /usr/share/nginx/html/index.html

echo "backend url from docker : $BACKEND_URL"

#Launch nginx
exec nginx -g 'daemon off;'