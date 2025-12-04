import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/database/schema/**.schema.ts',
  dialect: 'postgresql',
  out: './src/database/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});
