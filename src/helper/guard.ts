import { AnyObject } from "./type";

export function isNullable(value: any): value is null {
  return value === null || value === undefined;
}

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isObject(value: any): value is AnyObject {
  return typeof value === "object";
}
