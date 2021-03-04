/**
 * 通过链接地址下载文件
 * @param url - 链接地址
 * @param filename - 文件名
 * @returns
 */
export function downloadByUrl(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
