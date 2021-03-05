import { isNullable } from "../helper/guard";
/**
 * 身份证脱敏
 * @param defaultValue - 默认显示的值
 * @param phone - 身份证
 * @returns 身份证脱敏后的值
 * @example
 * ```ts
 * maskIdCard('--', 305958385738473627) // -> 3059***********627
 * maskIdCard('--', null) // -> --
 * ```
 */
export function maskIdCard(defaultValue: string, idCard?: string | number) {
  if (isNullable(idCard)) return defaultValue;
  return idCard.toString().replace(/(\d{4})\d*(\d{3})/, "$1***********$2");
}
