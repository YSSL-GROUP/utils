/**
 * 获取SessionStorage key = `key` 的值
 * @param key - key
 * @returns 经JSON.parse转换后的值
 */
export default function getSessionStorage<T>(key: string) {
  const str = sessionStorage.getItem(key);
  return str ? (JSON.parse(str) as T) : null;
}
