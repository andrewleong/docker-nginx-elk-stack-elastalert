FROM vimagick/elastalert:latest
# FROM python:3-alpine
 
# ENV ELASTALERT_VERSION=0.2.4
# ENV ELASTALERT_HOME=/opt/elastalert
# ENV TZ=UTC
 
# WORKDIR ${ELASTALERT_HOME}
 
# RUN set -xe \
#  && apk add --no-cache \
#  bash \
#  curl \
#  libffi \
#  libmagic \
#  libssl1.1 \
#  musl \
#  tzdata \
#  && apk add --no-cache -t .build-deps \
#  build-base \
#  libffi-dev \
#  musl-dev \
#  openssl-dev \
#  python3-dev \
#  && pip install elastalert==${ELASTALERT_VERSION} \
#  && mkdir -p rules \
#  && elastalert-create-index --config config.yaml \
# #  && curl -sSL https://github.com/Yelp/elastalert/raw/${ELASTALERT_VERSION}/config.yaml.example > config.yaml \
#  && apk del .build-deps

# COPY data/config.yaml /opt/elastalert/config.yaml

 
# VOLUME ${ELASTALERT_HOME}
 
# CMD ["elastalert", "--config", "config.yaml"]