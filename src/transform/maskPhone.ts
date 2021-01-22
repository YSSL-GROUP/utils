/**
 * 手机号脱敏
 * @param phone - 手机号
 * @param defaultValue - phone === null时默认显示的值
 * @returns 手机号脱敏后的值
 * @example
 * ```ts
 * maskPhone(15536435235) // -> 155****5235
 * maskPhone(null) // -> --
 * ```
 */
export function maskPhone(phone: string | number | null, defaultValue: "--") {
  if (phone === null) return defaultValue;
  return phone.toString().replace(/(\d{3})\d*(\d{4})/, "$1****$2");
}
