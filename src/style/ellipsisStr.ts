import { isNullable } from "../helper/guard";
/**
 * 根据`limit`长度截取`str`加上省略号
 * @param defaultValue - 默认显示的值
 * @param limit - 限制文字长度
 * @param str - 文本
 * @returns 截取并带省略号的字符串
 * @example
 * ```ts
 * ellipsisStr('--', 4, "哈哈哈哈哈哈哈") // -> 哈哈哈哈...
 * ellipsisStr('--', 4, null) // -> "--"
 * ```
 */
export function ellipsisStr(defaultValue = "--", limit: number, str?: string) {
  if (isNullable(str)) return defaultValue;
  return str.length > limit ? str.slice(0, limit) + "..." : str;
}
