/**
 * 判断当前浏览器是否为ie
 * @returns (number - ie版本号) (false - 不是ie)
 */
export function isIE() {
  const myNav = navigator.userAgent.toLowerCase();
  const idx = myNav.indexOf("msie");
  if (idx > 0) {
    return parseInt(myNav.split("msie")[1]);
  } else if (navigator.userAgent.match(/Trident\/7\./)) {
    return 11;
  }
  return false;
}
