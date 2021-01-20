import { toStr } from "../transform/toStr";
/**
 * 设置SessionStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
export function setSessionStorage(key: string, value: any) {
  const data = toStr(value);
  sessionStorage.setItem(key, data);
  return data;
}
