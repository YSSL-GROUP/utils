import { OUTLIERS } from "../const";
/**
 * 计算百分比
 * @param dividend - 被除数
 * @param divisor - 除数
 * @param several - 保留小数点后几位
 * @param outliers - dividend === null || divisor === null 显示的默认值
 * @returns 百分比
 * @example
 * ```ts
 * calculatePercentage(200, 20, 3) // -> 10.000%
 * calculatePercentage(null, 20, 3) // -> --
 * ```
 */
export default function calculatePercentage(
  dividend: number | string | null,
  divisor: number | string | null,
  several = 2,
  outliers = OUTLIERS,
) {
  if (dividend === "null" || divisor === "null") {
    return outliers;
  }
  if (typeof dividend === "number" && typeof divisor === "number") {
    return ((dividend / divisor) * 100).toFixed(several) + "%";
  }
}
