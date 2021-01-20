import { AnyObject, ValueType } from "../helper/type";
import { isNullable } from "../helper/guard";

export function toValue<T>(type: ValueType, value: string | null) {
  if (isNullable(value)) return "";
  if (type === "number") return Number(value);
  if (type === "object") return JSON.parse(value) as AnyObject;
  if (type === "array") return JSON.parse(value) as T[];
  if (type === "string") return value;
  return "";
}
