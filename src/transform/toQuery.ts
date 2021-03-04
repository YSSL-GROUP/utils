/**
 * 请求参数对象转换为字符串拼接
 * @param params - 请求参数
 * @returns 字符串拼接
 * @example
 * ```ts
 * toQuery({ a: 1, b: 2 }) // -> a=1&b=2
 * ```
 */
export function toQuery(params: { [p in any]: any }) {
  let str = "";
  for (const key in params) {
    str += `${key}=${params[key]}&`;
  }
  return str.substring(0, str.length - 1);
}
