# Simple Node CRUD App
This is a simple crud app that i was written by node to play around nodejs and expressjs eco system.
this project isn't clean and it was just a hobby project.
if you want to run this project first you have to have docker installed on your system and then use docker-compose to run it.

## Usage
- clone the project then use ```docker-compose up```
- if you want you can use the below instruction to run this project.
1. first pull the project ```docker pull imanhpr/simplenodecrud```
2. make a docker-compose file
```yml
version: '3.19'
services:
  nodeapp:
    image: imanhpr/simplenodecrud:latest
    volumes:
      - .:/app
    ports:
      - "80:8000"
    depends_on:
      - database
    
  database:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: testpass
      POSTGRES_DB : appdb
```
