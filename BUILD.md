```
docker build --build-arg BUILD_TIMESTAMP=$(date +%s) --build-arg VERSION=1.5.0 -t redpanda-console:1.5.0 .
az login
az acr login --name vypexacraeprod
docker tag redpanda-console:1.5.0 vypexacraeprod.azurecr.io/redpanda-console:1.5.0
docker push vypexacraeprod.azurecr.io/redpanda-console:1.5.0
```