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

import getRegular from "./validate/getRegular";
import Regular from "./validate/Regular";

const rsUtils = {
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
  // ellipsis
  ellipsis,
  // validate
  getRegular,
  Regular,
};

export default rsUtils;
