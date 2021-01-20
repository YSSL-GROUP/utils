/**
 * 手机号脱敏
 * @param defaultValue - phone === null时默认显示的值
 * @param phone - 手机号
 * @returns 手机号脱敏后的值
 * @example
 * ```ts
 * maskPhone("--", 15536435235) // -> 155****5235
 * maskPhone("--", null) // -> --
 * ```
 */
export function maskPhone<D>(defaultValue: D, phone: string | number | null) {
  if (phone === null) return defaultValue;
  return phone.toString().replace(/(\d{3})\d*(\d{4})/, "$1****$2");
}
