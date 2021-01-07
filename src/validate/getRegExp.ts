import RegExp, { RegExpType } from "./RegExp";

/**
 * 获取正则表达式
 * @param type - 正则类型
 * @returns 指定正则表达式或所有正则表达式集合
 */
export default function getRegExp(type?: RegExpType) {
  return type ? RegExp[type] : RegExp;
}
