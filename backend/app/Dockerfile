FROM python:3.8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip
COPY ./requirements.freeze /usr/src/app/requirements.freeze
RUN pip install -r requirements.freeze

COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

COPY . /usr/src/app/

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]