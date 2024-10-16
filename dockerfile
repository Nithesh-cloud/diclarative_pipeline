FROM nginx:latest
WORKDIR /app
 
COPY . .

EXPOSE 5000
CMD [ "nginx" ,"index.js" ]