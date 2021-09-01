#!/bin/bash
docker-compose down
export $(cat .env | xargs)
if [ -n "BACKEND_FOLDER" ];
then
    cd $BACKEND_FOLDER
    docker build -t $APP-backend -f $BACKEND_DOCKERFILE .
    cd -
fi
if [ -n "FRONTEND_FOLDER" ];
then
    cd $FRONTEND_FOLDER
    docker build -t $APP-frontend -f $FRONTEND_DOCKERFILE .
    cd -
 fi
 docker-compose up
