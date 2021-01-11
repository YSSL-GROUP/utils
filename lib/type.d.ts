import React from 'react';

/**
 * 文件或二进制数据转换为base64格式
 * @param data - File | Blob 对象
 * @returns base64字符串
 */
declare function convertToBase64(data?: File | Blob): Promise<string | ArrayBuffer | null>;

/**
 * 通过二进制数据下载文件
 * @param blob - 二进制数据
 * @param response - 如果传入 1.请求响应体 - 获取 response.headers['content-disposition'] 的值并计算文件名 2. 字符串 - 直接作为文件名
 * @returns
 */
declare function downloadViaBlob(blob: Blob, response: Response | string): Error | undefined;

/**
 * 通过链接地址下载文件
 * @param url - 链接地址
 * @param filename - 文件名
 * @returns
 */
declare function downloadViaUrl(url: string, filename: string): void;

/**
 * 调用浏览器文件选择
 * @param option - input标签属性配置项
 * @returns 选择的文件集合
 */
declare function selectFiles(option: HTMLInputElement): Promise<FileList | null>;

/**
 * 将普通对象转换成FormData对象
 * @param obj - 对象
 * @returns FormData对象
 */
declare function createFormData(obj?: {
    [p in string]: any;
}): FormData;

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
declare function extendSerialNumber<T>(page: number, pageSize: number, list: T[]): (T & {
    $serialNumber: number;
})[];

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
declare function calculatePercentage(dividend: number, divisor: number, several?: number): string;

/**
 * 手机号加密
 * @param phone - 手机号
 * @returns 手机号加密后的值
 * @example
 * ```ts
 * encryptPhone(15536435235) // -> 155****5235
 * ```
 */
declare function encryptPhone(phone: string | number | null): string;

/**
 * 获取LocalStorage key = `key` 的值
 * @param key - key
 * @returns 经JSON.parse转换后的值
 */
declare function getLocalStorage<T>(key: string): T | null;

/**
 * 获取SessionStorage key = `key` 的值
 * @param key - key
 * @returns 经JSON.parse转换后的值
 */
declare function getSessionStorage<T>(key: string): T | null;

/**
 * 设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
declare function setLocalStorage<T>(key: string, value: T): void;

/**
 * 设置SessionStorage key = `key` 的值（值会通过JSON.stringify序列化）
 * @param key - key
 * @returns
 */
declare function setSessionStorage<T>(key: string, value: T): void;

/**
 * 为el添加单行省略样式
 * @param el - react节点
 * @returns el
 */
declare function ellipsis<T extends JSX.Element>(el: T): React.FunctionComponentElement<any>;

declare const Regular: {
    int: RegExp;
    positiveInt: RegExp;
    positiveIntOrDecimal: RegExp;
    idCard: RegExp;
    chinese: RegExp;
    email: RegExp;
    money: RegExp;
    phone: RegExp;
    ip4: RegExp;
    ip6: RegExp;
    img: RegExp;
    url: RegExp;
    creditCode: RegExp;
    financialCode: RegExp;
};
declare type RegularType = keyof typeof Regular;

/**
 * 获取指定正则表达式
 * @param type - 正则类型
 * @returns 指定正则表达式
 */
declare function getRegular(type: RegularType): RegExp;

declare const rsUtils: {
    convertToBase64: typeof convertToBase64;
    downloadViaBlob: typeof downloadViaBlob;
    downloadViaUrl: typeof downloadViaUrl;
    selectFiles: typeof selectFiles;
    convertToFormData: typeof createFormData;
    extendSerialNumber: typeof extendSerialNumber;
    calculatePercentage: typeof calculatePercentage;
    encryptPhone: typeof encryptPhone;
    getLocalStorage: typeof getLocalStorage;
    getSessionStorage: typeof getSessionStorage;
    setLocalStorage: typeof setLocalStorage;
    setSessionStorage: typeof setSessionStorage;
    ellipsis: typeof ellipsis;
    getRegular: typeof getRegular;
    Regular: {
        int: RegExp;
        positiveInt: RegExp;
        positiveIntOrDecimal: RegExp;
        idCard: RegExp;
        chinese: RegExp;
        email: RegExp;
        money: RegExp;
        phone: RegExp;
        ip4: RegExp;
        ip6: RegExp;
        img: RegExp;
        url: RegExp;
        creditCode: RegExp;
        financialCode: RegExp;
    };
};

export default rsUtils;
