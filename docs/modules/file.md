[rs-utils](../README.md) / [Modules](../modules.md) / file

# Module: file

## Table of contents

### Functions

- [convertToBase64](file.md#converttobase64)
- [downloadViaBlob](file.md#downloadviablob)
- [downloadViaUrl](file.md#downloadviaurl)
- [selectFiles](file.md#selectfiles)

## Functions

### convertToBase64

▸ **convertToBase64**(`data?`: File \| Blob): *Promise*<*null* \| *string* \| ArrayBuffer\>

文件或二进制数据转换为base64格式

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data?` | File \| Blob | File | Blob 对象   |

**Returns:** *Promise*<*null* \| *string* \| ArrayBuffer\>

base64字符串

Defined in: [file/convertToBase64.ts:6](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/file/convertToBase64.ts#L6)

___

### downloadViaBlob

▸ **downloadViaBlob**(`blob`: Blob, `response`: Response \| *string*): *undefined* \| Error

通过二进制数据下载文件

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`blob` | Blob | 二进制数据   |
`response` | Response \| *string* | 如果传入 1.请求响应体 - 获取 response.headers['content-disposition'] 的值并计算文件名 2. 字符串 - 直接作为文件名   |

**Returns:** *undefined* \| Error

Defined in: [file/downloadViaBlob.ts:7](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/file/downloadViaBlob.ts#L7)

___

### downloadViaUrl

▸ **downloadViaUrl**(`url`: *string*, `filename`: *string*): *void*

通过链接地址下载文件

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* | 链接地址   |
`filename` | *string* | 文件名   |

**Returns:** *void*

Defined in: [file/downloadViaUrl.ts:7](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/file/downloadViaUrl.ts#L7)

___

### selectFiles

▸ **selectFiles**(`option?`: *Partial*<HTMLInputElement\>): *Promise*<*null* \| FileList\>

调用浏览器文件选择

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`option?` | *Partial*<HTMLInputElement\> | input标签属性配置项   |

**Returns:** *Promise*<*null* \| FileList\>

选择的文件集合

Defined in: [file/selectFiles.ts:6](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/file/selectFiles.ts#L6)
