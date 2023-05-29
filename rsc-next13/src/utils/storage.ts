import { kv } from "@vercel/kv";

type StorageMap = {
  "singlePageFormState.nhsNumber": string;
  "singlePageFormState.isOver18": string;
  "multiPageFormState.nhsNumber": string;
  "multiPageFormState.isOver18": string;
};

/**
 * Simple kv storage interface
 * To be replaced with a real storage implementation based on the Database of your choice
 */
export const storage = {
  async get<TKey extends keyof StorageMap>(key: TKey) {
    return await kv.get<StorageMap[TKey]>(key);
  },
  async set<TStorageKey extends keyof StorageMap>(
    key: TStorageKey,
    value: StorageMap[TStorageKey],
  ) {
    await kv.set(key, value);
  },
};
