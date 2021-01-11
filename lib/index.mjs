import React from 'react';

/**
 * 文件或二进制数据转换为base64格式
 * @param data - File | Blob 对象
 * @returns base64字符串
 */
function convertToBase64(data) {
  return new Promise(function (resolve, reject) {
    if (!data) {
      reject(new Error("请传入File/Blob文件"));
    } else {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        return resolve(reader.result);
      });
      reader.addEventListener("error", function (e) {
        return reject(e);
      });
      reader.readAsDataURL(data);
    }
  });
}

/**
 * 通过二进制数据下载文件
 * @param blob - 二进制数据
 * @param response - 如果传入 1.请求响应体 - 获取 response.headers['content-disposition'] 的值并计算文件名 2. 字符串 - 直接作为文件名
 * @returns
 */
function downloadViaBlob(blob, response) {
  var blobInstance = new Blob([blob]);

  var filename = function () {
    var _response$headers$get;

    if (typeof response === "string") return response;
    var matches = (_response$headers$get = response.headers.get("content-disposition")) === null || _response$headers$get === void 0 ? void 0 : _response$headers$get.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    return matches ? matches[1] : "";
  }();

  if (!filename) return new Error("未匹配到文件名");

  if ("download" in document.createElement("a")) {
    // 非IE下载
    var anchor = document.createElement("a");
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

/**
 * 通过链接地址下载文件
 * @param url - 链接地址
 * @param filename - 文件名
 * @returns
 */
function downloadViaUrl(url, filename) {
  var link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

/**
 * 调用浏览器文件选择
 * @param option - input标签属性配置项
 * @returns 选择的文件集合
 */
function selectFiles(option) {
  return new Promise(function (resolve, reject) {
    var input = document.createElement("input");
    input.type = "file";

    for (var key in option) {
      // @ts-ignore
      input[key] = option[key];
    }

    input.addEventListener("change", function () {
      resolve(input.files);
    });
    input.addEventListener("error", function (error) {
      reject(error);
    });
    input.click();
  });
}

/**
 * 将普通对象转换成FormData对象
 * @param obj - 对象
 * @returns FormData对象
 */
function createFormData() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var formData = new FormData();

  for (var key in obj) {
    formData.append(key, obj[key]);
  }

  return formData;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * 为列表扩展序号字段
 * @param page - 页码
 * @param pageSize - 每页条数
 * @param list - 数据列表
 * @returns 添加序号后的数据列表 `key=$serialNumber`
 * @example
 * ```ts
 * const list = [{name: '小明'}, {name: '小红'}]
 * extendSerialNumber(1, 20, list) // -> [{$serialNumber: 1, name: '小明'}, {$serialNumber: 2, name: '小红'}]
 * extendSerialNumber(2, 20, list) // -> [{$serialNumber: 11, name: '小明'}, {$serialNumber: 12, name: '小红'}]
 * ```
 */
function extendSerialNumber(page, pageSize, list) {
  return list.map(function (item, idx) {
    return _objectSpread2(_objectSpread2({}, item), {}, {
      $serialNumber: idx + 1 + (page - 1) * pageSize
    });
  });
}

/**
 * 计算百分比
 * @param dividend - 被除数
 * @param divisor - 除数
 * @param several - 保留小数点后几位
 * @returns 百分比
 * @example
 * ```ts
 * calculatePercentage(200, 20, 3) // -> 10.000%
 * ```
 */
function calculatePercentage(dividend, divisor) {
  var several = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  return (dividend / divisor * 100).toFixed(several) + "%";
}

/**
 * 手机号加密
 * @param phone - 手机号
 * @returns 手机号加密后的值
 * @example
 * ```ts
 * encryptPhone(15536435235) // -> 155****5235
 * ```
 */
function encryptPhone(phone) {
  if (!phone) return "";
  return phone.toString().replace(/(\d{3})\d*(\d{4})/, "$1****$2");
}

/**
 * 获取LocalStorage key = `key` 的值
 * @param key - key
 * @returns 经JSON.parse转换后的值
 */
function getLocalStorage(key) {
  var str = localStorage.getItem(key);
  return str ? JSON.parse(str) : null;
}

/**
 * 获取SessionStorage key = `key` 的值
 * @param key - key
 * @returns 经JSON.parse转换后的值
 */
function getSessionStorage(key) {
  var str = sessionStorage.getItem(key);
  return str ? JSON.parse(str) : null;
}

/**
 * 设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
function setLocalStorage(key, value) {
  var data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

/**
 * 设置SessionStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
function setSessionStorage(key, value) {
  var data = JSON.stringify(value);
  sessionStorage.setItem(key, data);
}

/**
 * 为el添加单行省略样式（节点需要有固定宽度）
 * @param el - react节点
 * @returns el
 */

function ellipsis(el) {
  return React.cloneElement(el, {
    style: _objectSpread2(_objectSpread2({}, el.props.style), {}, {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    })
  });
}

var Regular = {
  // 整数
  "int": /^(\-|\+)?([0-9]+|Infinity)$/,
  //正整数
  positiveInt: /^[1-9]\d*|0$/,
  // 正整数 or 小数
  positiveIntOrDecimal: /^([1-9]\d*|0)(\.\d*)?$/,
  //身份证号
  idCard: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  // 中文
  chinese: /^[\\u4e00-\\u9fa5]{0,}$/,
  // 邮箱
  email: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,
  //金额（精确到2位小数）
  money: /^[0-9]+(.[0-9]{2})?$/,
  // 电话
  phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/,
  ip4: /\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b/,
  ip6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
  img: /\\< *[img][^\\\\>]*[src] *= *[\\"\\']{0,1}([^\\"\\'\\ >]*)/,
  url: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
  // 统一社会信用代码
  creditCode: /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/,
  // 金融机构代码
  financialCode: /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{15}$/
};
var Regular$1 = new Proxy(Regular, {
  get: function get(target, key) {
    return target[key];
  },
  set: function set() {
    throw new Error("Regular can not be modified！");
  }
});

/**
 * 获取指定正则表达式
 * @param type - 正则类型
 * @returns 指定正则表达式
 */

function getRegular(type) {
  return Regular$1[type];
}

/**
 * 判断当前浏览器是否为ie
 * @returns number - ie浏览器版本 false - 不是ie
 */
function isIE() {
  var myNav = navigator.userAgent.toLowerCase();
  var idx = myNav.indexOf("msie");

  if (idx > 0) {
    return parseInt(myNav.split("msie")[1]);
  } else if (navigator.userAgent.match(/Trident\/7\./)) {
    return 11;
  }

  return false;
}

var rsUtils = {
  // file
  convertToBase64: convertToBase64,
  downloadViaBlob: downloadViaBlob,
  downloadViaUrl: downloadViaUrl,
  // form
  selectFiles: selectFiles,
  convertToFormData: createFormData,
  // format
  extendSerialNumber: extendSerialNumber,
  calculatePercentage: calculatePercentage,
  encryptPhone: encryptPhone,
  // storage
  getLocalStorage: getLocalStorage,
  getSessionStorage: getSessionStorage,
  setLocalStorage: setLocalStorage,
  setSessionStorage: setSessionStorage,
  // ellipsis
  ellipsis: ellipsis,
  // validate
  getRegular: getRegular,
  Regular: Regular$1,
  isIE: isIE
};

export default rsUtils;
