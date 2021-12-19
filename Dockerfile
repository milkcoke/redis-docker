# Docker file is generator of image

FROM redis-double
MAINTAINER milkcoke

# multiple redis-server on multiple ports
EXPOSE 7000/tcp
EXPOSE 7100/tcp
WORKDIR /data
# 다음경로에 redis 실행 파일들이 파일이 존재
# $ cd /usr/local/bin

# $ ls
# docker-entrypoint.sh  redis-benchmark  redis-check-rdb	redis-sentinel
# gosu		      redis-check-aof  redis-cli	redis-server


# redis.conf 파일에 로그를 남길 경로
# -p == --parents : 상위 경로도 함께 생성
RUN mkdir -p /var/log/redis/channel_1
RUN mkdir -p /var/log/redis/channel_2

RUN redis-server --port 7000 &
RUN redis-server --port 7100

# 얘는 그냥 conf 파일을 실행파일위치랑 일치시켜 주기 위한 곳인데
# 이미 /usr/local/bin/redis 에 있다는 것을 알았으니 굳이 할 필요는 없음.
#RUN mkdir /usr/local/etc/redis

#COPY redis.conf /usr/local/bin

#CMD [ "redis-server", "/usr/local/bin/redis/redis.conf" ]
#CMD ["redis-server", "--port", "7000"]
#CMD ["redis-server", "--port", "7100"]

# redis server 종료 명령어
# redis-cli shutdown