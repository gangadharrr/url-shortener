import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import path from "path";

export default defineConfig({
  out: "./drizzle",
  schema: path.join(__dirname, "src", "db", "schema"),
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    ssl:
      process.env.DB_SSL === "true"
        ? {
            rejectUnauthorized: false,
          }
        : false,
  },
});
