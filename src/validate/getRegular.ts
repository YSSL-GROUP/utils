import { Regular, RegularType } from "./Regular";

/**
 * 获取指定正则表达式
 * @param type - 正则类型
 * @returns 指定正则表达式
 */
export function getRegular(type: RegularType) {
  return Regular[type];
}
