import { AnyObject, ValueType } from "../helper/type";
import { isNullable } from "../helper/guard";

/**
 * 将字符串转换为指定`type`值
 * @param type - "string" | "number" | "object" | "array"
 * @param value - 值
 * @returns
 */
export function toValue<T>(type: ValueType, value: string | null) {
  if (isNullable(value)) return "";
  if (type === "number") return Number(value);
  if (type === "object") return JSON.parse(value) as AnyObject;
  if (type === "array") return JSON.parse(value) as T[];
  if (type === "string") return value;
  return "";
}
