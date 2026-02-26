FROM node:25-alpine

WORKDIR /SAAS-LANDING-PAGE-ADMYBRAND

COPY . .

RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "start"]