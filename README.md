# docker-nginx-elk-stack-elastalert
For logging nginx upstreams with elk stack that will send error logs via elastalert to ms teams

### Command to build images
docker build -t my-backend ./backend

### Command to deploy to swarm
docker stack deploy -c docker-compose.yml nginxtest
