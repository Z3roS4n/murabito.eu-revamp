// redis.js
import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL, // ad esempio: redis://default:password@host:port
});

redis.on("error", (err) => console.error("Redis Client Error", err));

await redis.connect();

export { redis };
