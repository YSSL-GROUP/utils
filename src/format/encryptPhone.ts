/**
 * 手机号加密
 * @param phone - 手机号
 * @returns 手机号加密后的值
 * @example
 * ```ts
 * encryptPhone(15536435235) // -> 155****5235
 * ```
 */
export default function encryptPhone(phone: string | number | null) {
  if (!phone) return "";
  return phone.toString().replace(/(\d{3})\d*(\d{4})/, "$1****$2");
}
