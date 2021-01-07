/**
 * 为列表扩展序号字段
 * @param page - 页码
 * @param pageSize - 每页条数
 * @param list - 数据列表
 * @returns 添加序号后的数据列表 `key=$serialNumber`
 */
export function extendSerialNumber<T>(page: number, pageSize: number, list: T[]) {
  return list.map((item, idx) => {
    return { ...item, $serialNumber: idx + 1 + (page - 1) * pageSize };
  });
}
