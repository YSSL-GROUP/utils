import { toStr } from "../transform/toStr";
/**
 * 设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
export function setLocalStorage(key: string, value: any) {
  const data = toStr(value);
  localStorage.setItem(key, data);
  return data;
}
