/**
 * 设置SessionStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
export function setSessionStorage<T>(key: string, value: T) {
  const data = JSON.stringify(value);
  sessionStorage.setItem(key, data);
}
