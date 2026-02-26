FROM node:25-alpine

WORKDIR /SAAS-LANDING-PAGE-ADMYBRAND

RUN npm install -g pnpm

COPY . .

RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]