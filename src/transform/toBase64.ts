import { isNullable } from "../helper/guard";
/**
 * 文件或二进制数据转换为base64格式
 * @param data - File | Blob 对象
 * @returns base64字符串
 */
export function toBase64(data: File | Blob | null) {
  return new Promise<FileReader["result"]>((resolve, reject) => {
    if (isNullable(data)) {
      reject(new Error("请传入File/Blob文件"));
    } else {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.addEventListener("error", (e) => reject(e));
      reader.readAsDataURL(data);
    }
  });
}
