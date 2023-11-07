build:
	docker-compose up --build

up:
	docker-compose up

down:
	docker-compose down

setup:
	docker-compose exec backend python manage.py makemigrations
	docker-compose exec backend python manage.py migrate

sh:
	docker-compose exec backend bash

sh-front:
	docker-compose exec frontend bash

test-back:
	docker-compose run backend python manage.py test