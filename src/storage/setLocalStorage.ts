import { isNullable, isNumber, isObject, isString } from "../helper/guard";
/**
 * 设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
export function setLocalStorage<T>(key: string, value: T) {
  if (isNullable(value)) return;
  localStorage.setItem(key, data(value));

  function data(value: T) {
    if (isNumber(value)) return value.toString();
    if (isString(value)) return value;
    if (isObject(value)) return JSON.stringify(value);
    return "";
  }
}
