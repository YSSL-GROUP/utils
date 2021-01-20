import { ValueType } from "../helper/type";
import { toValue } from "../transform/toValue";
/**
 * 获取LocalStorage key = `key` 的值
 * @param type - 指定类型
 * @param key - key
 * @returns 将`LocalStorage`的值转换指定`type`的值
 */
export function getLocalStorage(type: ValueType, key: string) {
  return toValue(type, localStorage.getItem(key));
}
