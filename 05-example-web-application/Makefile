DATABASE_URL:=postgres://postgres:foobarbaz@localhost:5432/postgres
DATABASE_PWD:=foobarbaz

.PHONY: run-postgres
run-postgres:
	@echo Starting postgres container
	docker run \
		--rm \
		-e POSTGRES_PASSWORD=foobarbaz \
		-v pgdata:/var/lib/postgresql/data \
		-p 5432:5432 \
		postgres:15.1-alpine

.PHONY: run-api-node
run-api-node:
	@echo Starting node api
	cd api-node && \
		DATABASE_URL=${DATABASE_URL} \
		npm run dev

.PHONY: run-api-golang
run-api-golang:
	@echo Starting golang api
	cd api-golang && \
		DATABASE_URL=${DATABASE_URL} \
		go run main.go

.PHONY: run-api-fastapi
run-api-fastapi:
	@echo Starting fastapi api
	cd api-fastapi && \
		DATABASE_URL=${DATABASE_URL} \
		DATABASE_PWD=${DATABASE_PWD} \
		fastapi run main.py

.PHONY: run-client-react
run-client-react:
	@echo Starting react client
	cd client-react && \
		npm run dev
