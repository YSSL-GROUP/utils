/**
 * 计算百分比
 * @param dividend - 被除数
 * @param divisor - 除数
 * @param several - 保留小数点后几位
 * @returns 百分比
 * @example
 * ```ts
 * calculatePercentage(200, 20, 3) // -> 10.000%
 * ```
 */
export default function calculatePercentage(dividend: number, divisor: number, several = 2) {
  return ((dividend / divisor) * 100).toFixed(several) + "%";
}
