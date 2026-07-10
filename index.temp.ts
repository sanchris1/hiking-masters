import { Client } from "pg";
import "dotenv/config";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  await client.connect();

  const result = await client.query(`
    SELECT
      pid,
      state,
      wait_event_type,
      wait_event,
      query
    FROM pg_stat_activity
    WHERE datname = current_database();
  `);

  console.table(result.rows);

  await client.end();
}

main();
