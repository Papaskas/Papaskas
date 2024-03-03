run:
	docker build -t papaskas/portfolio .
	docker run --rm -p 80:80 papaskas/portfolio

push:
	docker build -t papaskas/portfolio .
	docker push papaskas/portfolio

pull:
	docker image pull papaskas/portfolio
	docker run --rm -p 80:80 papaskas/portfolio