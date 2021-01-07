/**
 * 通过二进制下载文件
 * @param blob - 二进制数据
 * @param response - 如果传入 1.请求响应体 - 获取 response.headers['content-disposition'] 的值并计算文件名 2. 字符串 - 直接作为文件名
 * @returns
 */
export function downloadViaBlob(blob: Blob, response: Response | string) {
  const blobInstance = new Blob([blob]);
  const filename = (function () {
    if (typeof response === "string") return response;
    const matches = response.headers.get("content-disposition")?.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    return matches ? matches[1] : "";
  })();
  if (!filename) return new Error("未匹配到文件名");
  if ("download" in document.createElement("a")) {
    // 非IE下载
    const anchor = document.createElement("a");
    anchor.download = decodeURIComponent(filename);
    anchor.style.display = "none";
    anchor.href = URL.createObjectURL(blobInstance);
    document.body.appendChild(anchor);
    anchor.click();
    URL.revokeObjectURL(anchor.href); // 释放URL 对象
    document.body.removeChild(anchor);
  } else {
    // IE10+下载
    navigator.msSaveBlob(blobInstance, filename);
  }
}
