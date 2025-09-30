import type { CacheItem } from "./CacheItem.js";

export class CacheManagement {
  private static instance: CacheManagement;
  private cache: Map<string, CacheItem> = new Map();

  private constructor() {}

  public static getInstance(): CacheManagement {
    if (!CacheManagement.instance) {
      CacheManagement.instance = new CacheManagement();
      console.log("CacheManagement is initialized");
    }
    return CacheManagement.instance;
  }

  public set(key: string, value: any, ttlInSeconds?: number) {
    const expiry = ttlInSeconds ? Date.now() + ttlInSeconds * 1000 : undefined;
    this.cache.set(key, { value, expiry });
    console.log(`Cache set: ${key}`);
  }

  public get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (item.expiry && Date.now() > item.expiry) {
      this.cache.delete(key);
      console.log(`Cache expired: ${key}`);
      return null;
    }

    return item.value;
  }

  public delete(key: string) {
    this.cache.delete(key);
    console.log(`Cache deleted: ${key}`);
  }

  public clear() {
    this.cache.clear();
    console.log("Cache cleared");
  }
}
