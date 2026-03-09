import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

let redis = null;
let redisAvailable = false;

try {
    redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
        maxRetriesPerRequest: 1,
        enableReadyCheck: false,
        lazyConnect: true,
        connectTimeout: 3000,
        retryStrategy: () => null, // Don't retry — fail fast
    });

    redis.on('connect', () => {
        redisAvailable = true;
        console.log('✅ Redis connected successfully');
    });

    redis.on('error', () => {
        redisAvailable = false;
        // Silently ignore — Redis is optional
    });

    // Try connecting; if it fails, catch it
    redis.connect().catch(() => {
        redisAvailable = false;
        console.warn('⚠️  Redis unavailable — running without cache (this is OK)');
    });
} catch (err) {
    redisAvailable = false;
    console.warn('⚠️  Redis unavailable — running without cache (this is OK)');
}

// Cache helper functions with graceful fallback
export const cache = {
    async get(key) {
        if (!redisAvailable || !redis) return null;
        try {
            const data = await redis.get(key);
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    },

    async set(key, value, ttl = 86400) {
        if (!redisAvailable || !redis) return false;
        try {
            await redis.set(key, JSON.stringify(value), 'EX', ttl);
            return true;
        } catch {
            return false;
        }
    },

    async del(key) {
        if (!redisAvailable || !redis) return false;
        try {
            await redis.del(key);
            return true;
        } catch {
            return false;
        }
    },

    async clear(pattern) {
        if (!redisAvailable || !redis) return false;
        try {
            const keys = await redis.keys(pattern);
            if (keys.length > 0) {
                await redis.del(...keys);
            }
            return true;
        } catch {
            return false;
        }
    },
};

export default redis;
