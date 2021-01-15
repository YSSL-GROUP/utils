import Either from "./fp/Either";

import convertToBase64 from "./file/convertToBase64";
import downloadViaBlob from "./file/downloadViaBlob";
import downloadViaUrl from "./file/downloadViaUrl";
import selectFiles from "./file/selectFiles";

import convertToFormData from "./form/convertToFormData";
import extendSerialNumber from "./form/extendSerialNumber";

import calculatePercentage from "./format/calculatePercentage";
import encryptPhone from "./format/encryptPhone";

import getLocalStorage from "./storage/getLocalStorage";
import getSessionStorage from "./storage/getSessionStorage";
import setLocalStorage from "./storage/setLocalStorage";
import setSessionStorage from "./storage/setSessionStorage";

import ellipsis from "./style/ellipsis";
import ellipsisStr from "./style/ellipsisStr";

import getRegular from "./validate/getRegular";
import Regular from "./validate/Regular";
import isIE from "./validate/isIE";

const rsUtils = {
  // fp
  Either,
  // file
  convertToBase64,
  downloadViaBlob,
  downloadViaUrl,
  // form
  selectFiles,
  convertToFormData,
  // format
  extendSerialNumber,
  calculatePercentage,
  encryptPhone,
  // storage
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
  // style
  ellipsis,
  ellipsisStr,
  // validate
  getRegular,
  Regular,
  isIE,
};

export default rsUtils;
