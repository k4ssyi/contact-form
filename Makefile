# 開発環境用コマンド
ALL: image
shell:
	docker-compose -f docker-compose.yml run --rm app python3 manage.py shell_plus --bpython --print-sql
# Dockerファイルの静的解析ツール実行
hadolint:
	docker run --rm -i hadolint/hadolint hadolint - --format json < ./Dockerfile | jq .
# docker-composeの操作
image:
	docker-compose -f docker-compose.yml build
container:
	docker-compose -f docker-compose.yml up
up:
	docker-compose -f docker-compose.yml up -d
stop:
	docker-compose -f docker-compose.yml stop
down:
	docker-compose -f docker-compose.yml down
