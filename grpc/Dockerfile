FROM node:14-buster as builder

RUN mkdir /var/app

COPY package.json /var/app
COPY yarn.lock /var/app

WORKDIR /var/app

RUN yarn --frozen-lockfile

COPY . /var/app

RUN yarn build

FROM node:14-buster

ENV NODE_ENV=production
ENV HOST=0.0.0.0

WORKDIR /var/app

COPY --from=builder /var/app/package.json /var/app/package.json
COPY --from=builder /var/app/yarn.lock /var/app/yarn.lock

RUN yarn install --frozen-lockfile --production

COPY --from=builder /var/app/dist /var/app/dist
COPY --from=builder /var/app/assets /var/app/assets

EXPOSE 50051
CMD yarn start:dist
