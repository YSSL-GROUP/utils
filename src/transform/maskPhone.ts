import { isNullable } from "../helper/guard";
/**
 * 手机号脱敏
 * @param defaultValue - 默认显示的值
 * @param phone - 手机号
 * @returns 手机号脱敏后的值
 * @example
 * ```ts
 * maskPhone('--', 15536435235) // -> 155****5235
 * maskPhone('--', null) // -> --
 * ```
 */
export function maskPhone(defaultValue: string, phone?: string | number) {
  if (isNullable(phone)) return defaultValue;
  return phone.toString().replace(/(\d{3})\d*(\d{4})/, "$1****$2");
}
