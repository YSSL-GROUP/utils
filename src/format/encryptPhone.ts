import { OUTLIERS } from "@/const";

/**
 * 手机号加密
 * @param phone - 手机号
 * @param outliers - 手机号为空时默认显示的值
 * @returns 手机号加密后的值
 * @example
 * ```ts
 * encryptPhone(15536435235) // -> 155****5235
 * encryptPhone(null) // -> --
 * ```
 */
export default function encryptPhone(phone: string | number | null, outliers = OUTLIERS) {
  if (!phone) return outliers;
  return phone.toString().replace(/(\d{3})\d*(\d{4})/, "$1****$2");
}
