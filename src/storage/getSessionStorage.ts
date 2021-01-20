import { ValueType } from "../helper/type";
import { toValue } from "../transform/toValue";
/**
 * 获取SessionStorage key = `key` 的值
 * @param type - 指定类型
 * @param key - key
 * @returns 将`SessionStorage`的值转换指定`type`的值
 */
export function getSessionStorage(type: ValueType, key: string) {
  return toValue(type, sessionStorage.getItem(key));
}
