/**
 * 设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
export default function setLocalStorage<T>(key: string, value: T) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}
