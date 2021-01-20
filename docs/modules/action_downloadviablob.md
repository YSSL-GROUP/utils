[rs-utils](../README.md) / action/downloadViaBlob

# Module: action/downloadViaBlob

## Table of contents

### Functions

- [downloadViaBlob](action_downloadviablob.md#downloadviablob)

## Functions

### downloadViaBlob

▸ **downloadViaBlob**(`blob`: Blob, `response`: Response \| *string*): *undefined* \| Error

通过二进制数据下载文件

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`blob` | Blob | 二进制数据   |
`response` | Response \| *string* | 如果传入 1.请求响应体 - 获取 response.headers['content-disposition'] 的值并计算文件名 2. 字符串 - 直接作为文件名   |

**Returns:** *undefined* \| Error

Defined in: [action/downloadViaBlob.ts:7](https://github.com/HanZhaorz/rs-utils/blob/c9a74b1/src/action/downloadViaBlob.ts#L7)
