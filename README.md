without lb:
	build: `docker build -t nodeapp .`

    run:`docker run -p port:9999 nodeapp`

with lb:
	`docker-compose up`

    `docker-compose down`
