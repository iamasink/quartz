---
title: 
draft: false
aliases: 
tags:
---

https://github.com/itzg/docker-minecraft-server
very awesome docker minecraft server
heres my compose.yml
```yml
---
services:
  mcserver:
    stop_grace_period: 2m
    container_name: mcserver
    image: itzg/minecraft-server
    ports:
      - 25565:25565
    environment:
      - EULA=TRUE
      - TYPE=FABRIC

      - MODRINTH_PROJECTS=styled-chat,styled-nicknames,dynres,anti-xray,luckperms,chunky,spark,minimotd,carpet,itemrename,lithium,krypton,ferrite-core,noisium,adaptiveview,fabric-api
      - MODRINTH_ALLOWED_VERSION_TYPE=release
      - MODRINTH_DOWNLOAD_DEPENDENCIES=required
      - REMOVE_OLD_MODS=false
      
      - DIFFICULTY=normal
      - TZ=Europe/London
      - USE_AIKAR_FLAGS=true
      - MEMORY=4G
      - SNOOPER_ENABLED=false
      - RCON_PASSWORD=password
      - ENABLE_COMMAND_BLOCK=true
      - ENFORCE_SECURE_PROFILE=false
      - SEED=seed
      - STOP_SERVER_ANNOUNCE_DELAY=30
      - ENABLE_WHITELIST=true
      - ENFORCE_WHITELIST=true
      - WHITELIST=lilyl
  

      - USE_SIMD_FLAGS=true
      - MAX_TICK_TIME=-1 # DISABLE THIS (-1) if autopause is enabled. otherwise 120000

      - JVM_DD_OPTS=disable.watchdog:true,paper.playerconnection.keepalive:120
      - SPAWN_PROTECTION=0
      - ENABLE_AUTOPAUSE=FALSE
      - AUTOPAUSE_TIMEOUT_EST=1200 # default 3600 describes the time between the last client disconnect and the pausing of the process
      - AUTOPAUSE_TIMEOUT_INIT=120 # default 600 describes the time between server start and the pausing of the process, when no client connects inbetween
      - AUTOPAUSE_TIMEOUT_KN=60 # default 120 describes the time between knocking of the port (e.g. by the main menu ping) and the pausing of the process, when no client connects inbetween
      - AUTOPAUSE_PERIOD=10 # default 10 describes period of the daemonized state machine, that handles the pausing of the process
      - DEBUG_AUTOPAUSE=FALSE

    healthcheck:
      test: mc-health
      start_period: 1m
      interval: 5s
      retries: 20
    tty: true
    stdin_open: true
    restart: unless-stopped
    volumes:
      - ~/app/minecraftserver:/data
    deploy:
      resources:
        limits:
          cpus: "3"
          memory: 7G
```

originally, I wanted to use quilt because, idk- its different. but I ran into enough headaches that I gave up. maybe another time