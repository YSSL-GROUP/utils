/**
 * 计算百分比
 * @param defaultValue - dividend === null || divisor === null 显示的默认值
 * @param dividend - 被除数
 * @param divisor - 除数
 * @param several - 保留小数点后几位
 * @returns 百分比
 * @example
 * ```ts
 * calculatePercentage('--', 200, 20, 3) // -> 10.000%
 * calculatePercentage('--', null, 20, 3) // -> --
 * ```
 */
export default function calculatePercentage<D, V1 extends number | string | null, V2 extends number | string | null>(
  defaultValue: D,
  dividend: V1,
  divisor: V2,
  several = 2,
): V1 extends number | string ? (V2 extends number | string ? string : D) : D {
  // @ts-ignore
  if (dividend === null || divisor === null) return defaultValue;
  // @ts-ignore
  return ((Number(dividend) / Number(divisor)) * 100).toFixed(several) + "%";
}
