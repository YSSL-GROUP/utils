/**
 * 手机号加密
 * @param defaultValue - phone === null时默认显示的值
 * @param phone - 手机号
 * @returns 手机号加密后的值
 * @example
 * ```ts
 * encryptPhone("--", 15536435235) // -> 155****5235
 * encryptPhone("--", null) // -> --
 * ```
 */
export default function encryptPhone<D, V extends string | number | null>(
  defaultValue: D,
  phone: V,
): V extends string | number ? string : D {
  // @ts-ignore
  if (phone === null) return defaultValue;
  // @ts-ignore
  return phone.toString().replace(/(\d{3})\d*(\d{4})/, "$1****$2");
}
