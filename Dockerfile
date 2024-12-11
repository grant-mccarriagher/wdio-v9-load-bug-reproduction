FROM node:iron

RUN apt-get update -qq \
  && apt-get install -qq --no-install-recommends \
    ca-certificates \
    apt-transport-https \
  && apt-get upgrade -qq

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apt-get install -y wget
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y ./google-chrome-stable_current_amd64.deb

RUN mkdir /home/e2e
WORKDIR /home/e2e
COPY . .

RUN npm i
RUN npm run test