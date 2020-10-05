# docker-nginx-elk-stack-elastalert
For logging nginx upstreams with elk stack that will send error logs via elastalert to ms teams

### Command to build images
docker build -t my-backend ./backend

### Command to deploy to swarm
docker stack deploy -c docker-compose.yml nginxtest

### Create elastalert index for first time 
/bin/sh into the elastalert docker container then the following:
>>> curl -X DELETE http://elasticsearch:9200/elastalert_*
>>> elastalert-create-index --config config.yaml
>>> elastalert-test-rule --config config.yaml --alert rules/example.yaml