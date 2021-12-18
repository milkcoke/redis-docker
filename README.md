
# redis-docker

## Introduction
Just practice and follow the step for loading multiple redis servers on docker


## Requirements
 - docker
 - redis

## Step
1. Divide redis-server like channel \
    Each server should be executed on different port 
2. Configure `redis.conf` for dividing server port
3. Make your custom image file including `redis.conf` on `/data` (default directory)
4. `docker build` using Dockerfile \
    Dockerfile has directory making process logging and store data and \ 
    move `redis.conf` to where `redis-server` exists

5. ~ing


## 🔗 Reference

- [docker CLI options](https://khj93.tistory.com/entry/Docker-Docker-option-%EB%AA%85%EB%A0%B9%EC%96%B4-%EB%AA%A9%EB%A1%9D)
- [docker tips](http://redisgate.kr/redis/education/docker_intro.php)
- [docker-hub redis docs](https://hub.docker.com/_/redis)
- [redis.conf on docker 시행착오](https://yongho1037.tistory.com/699)