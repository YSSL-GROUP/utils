import React from "react";
/**
 * 为el节点添加单行省略样式（节点需要有固定宽度）
 * @param el - react节点
 * @returns el
 */
export default function ellipsis<T extends JSX.Element>(el: T) {
  return React.cloneElement(el, {
    style: { ...el.props.style, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  });
}
