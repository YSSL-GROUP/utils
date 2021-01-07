/**
 * 调用浏览器文件选择
 * @param option - input标签属性配置项
 * @returns 选择的文件集合
 */
export function selectFiles(option: HTMLInputElement) {
  return new Promise<HTMLInputElement["files"]>((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    for (const key in option) {
      // @ts-ignore
      input[key] = option[key];
    }
    input.addEventListener("change", () => {
      resolve(input.files);
    });
    input.addEventListener("error", (error) => {
      reject(error);
    });
    input.click();
  });
}
