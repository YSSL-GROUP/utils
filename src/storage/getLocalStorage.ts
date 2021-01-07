/**
 * 获取LocalStorage key = `key` 的值
 * @param key - key
 * @returns 经JSON.parse转换后的值
 */
export function getLocalStorage<T>(key: string): T | null {
  const str = localStorage.getItem(key);
  return str ? (JSON.parse(str) as T) : null;
}
