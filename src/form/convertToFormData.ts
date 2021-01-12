/**
 * 将普通对象转换成FormData对象
 * @param obj - 对象
 * @returns FormData对象
 */
export default function convertToFormData(obj: { [p in string]: any } = {}) {
  const formData = new FormData();
  for (const key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}
