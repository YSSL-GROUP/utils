import { isNullable } from "../helper/guard";
/**
 * 姓名脱敏
 * @param defaultValue - 默认显示的值
 * @param name - 姓名
 * @returns 姓名脱敏后的值
 * @example
 * ```ts
 * maskName('--' ,'王中王') // -> 王**
 * maskName('--') // -> --
 * ```
 */
export function maskName(defaultValue: string, name?: string) {
  if (isNullable(name)) return defaultValue;
  return name.substring(0, 1) + "**";
}
