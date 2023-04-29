docker ps -a | grep chatgpt-web | awk '{print $2}'|xargs sudo docker stop
docker ps -a | grep chatgpt-web | awk '{print $2}'|xargs sudo docker rm
# docker images | grep chatgpt-web | awk '{print $3}' | xargs sudo docker rmi -f

# build image
docker build -t chatgpt-web .

# run container
docker run --name chatgpt-web -d -p 3002:3002 chatgpt-web
