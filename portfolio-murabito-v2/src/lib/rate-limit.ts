import { redis } from "./redis";

export async function rateLimit(key: string, limit: number = 1, window: number = 60) {
  const current = await redis.incr(key);
  if (current === 1)
    await redis.expire(key, window);
  return current <= limit;
}