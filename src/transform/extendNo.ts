/**
 * 为列表扩展序号字段 (No - number order编号顺序)
 * @param page - 页码
 * @param pageSize - 每页条数
 * @param list - 数据列表
 * @returns 添加序号后的数据列表 `key=$No`
 * @example
 * ```ts
 * const list = [{name: '小明'}, {name: '小红'}]
 * extendNo(1, 20, list) // -> [{$No: 1, name: '小明'}, {$No: 2, name: '小红'}]
 * extendNo(2, 20, list) // -> [{$No: 11, name: '小明'}, {$No: 12, name: '小红'}]
 * ```
 */
export function extendNo<T>(page: number, pageSize: number, list: T[]) {
  return list.map((item, idx) => {
    return { ...item, $No: idx + 1 + (page - 1) * pageSize };
  });
}
