import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

function getDb() {
  const connectionString = process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('Database connection string not configured');
  }

  const sql = neon(connectionString);
  return drizzle(sql, { schema });
}

// Lazy initialization - only create db connection when needed
let _db: ReturnType<typeof getDb> | null = null;

export function getDatabase() {
  if (!_db) {
    _db = getDb();
  }
  return _db;
}

// For backwards compatibility - will throw if used during build without DB
export const db = new Proxy({} as ReturnType<typeof getDb>, {
  get(_, prop) {
    return getDatabase()[prop as keyof ReturnType<typeof getDb>];
  },
});

export * from './schema';
