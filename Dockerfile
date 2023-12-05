FROM nginx:1.24-alpine
COPY ./dist/angular-example-app /usr/share/nginx/html

EXPOSE 8080 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
