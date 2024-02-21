FROM node:20.10

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "run", "serve"]
