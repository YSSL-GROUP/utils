import { isNullable } from "../helper/guard";
/**
 * 计算百分比 (pct是percentage缩写)
 * @param defaultValue - 默认显示的值
 * @param several - 保留小数点后几位
 * @param dividend - 被除数
 * @param divisor - 除数
 * @returns 百分比
 * @example
 * ```ts
 * pct('--', 3, 200, 20,) // -> 10.000%
 * pct('--', 3, null, 20) // -> --
 * ```
 */
export function toPct(defaultValue = "--", several = 2, dividend?: number | string, divisor?: number | string) {
  if (isNullable(dividend) || isNullable(divisor)) return defaultValue;
  return ((Number(dividend) / Number(divisor)) * 100).toFixed(several) + "%";
}
