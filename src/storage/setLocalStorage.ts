import { isBoolean, isNullable, isNumber, isObject, isString } from "../helper/guard";
/**
 * 设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
export function setLocalStorage<T>(key: string, value: T) {
  const data = transfer(value);
  localStorage.setItem(key, data);
  return data;

  function transfer(value: T) {
    if (isNullable(value)) return "";
    if (isString(value)) return value;
    if (isBoolean(value)) return value.toString();
    if (isNumber(value)) return value.toString();
    if (isObject(value)) return JSON.stringify(value);
    return "";
  }
}
