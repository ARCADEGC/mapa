# TO RUN

## Requirements

-   [Bun](bun.sh)
-   Vercel CLI
    -   `bun i -g vercel`

## Create a [Vercel Postgres DB](https://vercel.com/docs/storage/vercel-postgres)

## Run

1. pull your env files with `POSTGRES_URL`

> Connect to a project
>
> Start by connecting to your existing project and then run `vercel link` in the CLI to link to the project locally. If you don’t already have a project to connect to, you can get started with a Postgres template.
>
> Pull your latest environment variables
>
> Run `vercel env pull .env.development.local` to make the latest environment variables available to your project locally.
>
> Install our package
>
> Then run `bun i @vercel/postgres` to install the Vercel Postgres SDK.

2. Download dependencies

```bash
bun i
bun drizzle-kit generate
bun tsx db/migrate.ts
bun tsx db/seed.ts
```
