/**
 * 为dom添加 `row` 行省略样式
 * @param row - 行数
 * @param dom - 节点
 * @returns dom
 */
export default function ellipsis(row = 1, dom: HTMLElement) {
  dom.style.overflow = "hidden";
  // @ts-ignore
  dom.style["text-overflow"] = "ellipsis";
  if (row === 1) {
    // @ts-ignore
    dom.style["white-space"] = "nowrap";
  } else {
    dom.style["display"] = "-webkit-box";
    // @ts-ignore
    dom.style["-webkit-line-clamp"] = row;
    // @ts-ignore
    dom.style["-webkit-box-orient"] = "vertical";
  }
  return dom;
}
