import { isBoolean, isNullable, isNumber, isObject, isString } from "../helper";

/**
 * 将输入的值转换为字符串(null & undefined转换为空串)
 * @param value - 任意类型值
 * @returns
 */
export function toStr(value: any) {
  if (isNullable(value)) return "";
  if (isString(value)) return value;
  if (isBoolean(value)) return value.toString();
  if (isNumber(value)) return value.toString();
  if (isObject(value)) return JSON.stringify(value);
  return "";
}
