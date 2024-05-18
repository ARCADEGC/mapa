import { Config, defineConfig } from "drizzle-kit";
import "@/lib/loadEnv";

const drizzleConfig: Config = {
    schema: "./db/schema.ts",
    out: "./db/drizzle",
    dialect: "postgresql",

    dbCredentials: {
        url: process.env.POSTGRES_URL!,
        database: process.env.POSTGRES_URL!,
    },
    strict: true,
    verbose: true,
};

export default defineConfig(drizzleConfig);
