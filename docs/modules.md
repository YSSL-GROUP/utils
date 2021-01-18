[rs-utils](README.md) / Exports

# rs-utils

## Table of contents

### Variables

- [Regular](modules.md#regular)

### Functions

- [calculatePercentage](modules.md#calculatepercentage)
- [convertToBase64](modules.md#converttobase64)
- [convertToFormData](modules.md#converttoformdata)
- [downloadViaBlob](modules.md#downloadviablob)
- [downloadViaUrl](modules.md#downloadviaurl)
- [ellipsis](modules.md#ellipsis)
- [ellipsisStr](modules.md#ellipsisstr)
- [encryptPhone](modules.md#encryptphone)
- [extendSerialNumber](modules.md#extendserialnumber)
- [getLocalStorage](modules.md#getlocalstorage)
- [getRegular](modules.md#getregular)
- [getSessionStorage](modules.md#getsessionstorage)
- [isIE](modules.md#isie)
- [selectFiles](modules.md#selectfiles)
- [setLocalStorage](modules.md#setlocalstorage)
- [setSessionStorage](modules.md#setsessionstorage)

## Variables

### Regular

• `Const` **Regular**: *object*

所有正则表达式

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`chinese` | *RegExp* | *RegExp* |
`creditCode` | *RegExp* | *RegExp* |
`email` | *RegExp* | *RegExp* |
`financialCode` | *RegExp* | *RegExp* |
`idCard` | *RegExp* | *RegExp* |
`img` | *RegExp* | *RegExp* |
`int` | *RegExp* | *RegExp* |
`ip4` | *RegExp* | *RegExp* |
`ip6` | *RegExp* | *RegExp* |
`money` | *RegExp* | *RegExp* |
`phone` | *RegExp* | *RegExp* |
`positiveInt` | *RegExp* | *RegExp* |
`positiveIntOrDecimal` | *RegExp* | *RegExp* |
`url` | *RegExp* | *RegExp* |

Defined in: [validate/Regular.ts:33](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/validate/Regular.ts#L33)

## Functions

### calculatePercentage

▸ **calculatePercentage**<D\>(`defaultValue`: D, `dividend`: *number* \| *string* \| *null*, `divisor`: *number* \| *string* \| *null*, `several?`: *number*): *string* \| D

计算百分比

**`example`** 
```ts
calculatePercentage('--', 200, 20, 3) // -> 10.000%
calculatePercentage('--', null, 20, 3) // -> --
```

#### Type parameters:

Name |
------ |
`D` |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`defaultValue` | D | - | dividend === null || divisor === null 显示的默认值   |
`dividend` | *number* \| *string* \| *null* | - | 被除数   |
`divisor` | *number* \| *string* \| *null* | - | 除数   |
`several` | *number* | 2 | 保留小数点后几位   |

**Returns:** *string* \| D

百分比

Defined in: [format/calculatePercentage.ts:14](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/format/calculatePercentage.ts#L14)

___

### convertToBase64

▸ **convertToBase64**(`data?`: File \| Blob): *Promise*<*null* \| *string* \| ArrayBuffer\>

文件或二进制数据转换为base64格式

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data?` | File \| Blob | File | Blob 对象   |

**Returns:** *Promise*<*null* \| *string* \| ArrayBuffer\>

base64字符串

Defined in: [file/convertToBase64.ts:6](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/file/convertToBase64.ts#L6)

___

### convertToFormData

▸ **convertToFormData**(`obj?`: { [p in string]: any}): FormData

将普通对象转换成FormData对象

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`obj` | { [p in string]: any} | ... | 对象   |

**Returns:** FormData

FormData对象

Defined in: [form/convertToFormData.ts:6](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/form/convertToFormData.ts#L6)

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

Defined in: [file/downloadViaBlob.ts:7](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/file/downloadViaBlob.ts#L7)

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

Defined in: [file/downloadViaUrl.ts:7](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/file/downloadViaUrl.ts#L7)

___

### ellipsis

▸ **ellipsis**<T\>(`el`: T): *FunctionComponentElement*<*any*\>

为el节点添加单行省略样式（节点需要有固定宽度）

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *Element*<T\> |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`el` | T | react节点   |

**Returns:** *FunctionComponentElement*<*any*\>

el

Defined in: [style/ellipsis.ts:7](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/style/ellipsis.ts#L7)

___

### ellipsisStr

▸ **ellipsisStr**(`limit`: *number*, `str`: *string* \| *null*): *string*

根据`limit`长度截取`str`加上省略号

**`example`** 
```ts
ellipsisStr(4, "哈哈哈哈哈哈哈") // -> 哈哈哈哈...
ellipsisStr(4, null) // -> ""
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`limit` | *number* | 限制文字长度   |
`str` | *string* \| *null* | 文本   |

**Returns:** *string*

截取并带省略号的字符串

Defined in: [style/ellipsisStr.ts:12](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/style/ellipsisStr.ts#L12)

___

### encryptPhone

▸ **encryptPhone**<D\>(`defaultValue`: D, `phone`: *string* \| *number* \| *null*): *string* \| D

手机号脱敏

**`example`** 
```ts
encryptPhone("--", 15536435235) // -> 155****5235
encryptPhone("--", null) // -> --
```

#### Type parameters:

Name |
------ |
`D` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | D | phone === null时默认显示的值   |
`phone` | *string* \| *number* \| *null* | 手机号   |

**Returns:** *string* \| D

手机号脱敏后的值

Defined in: [format/encryptPhone.ts:12](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/format/encryptPhone.ts#L12)

___

### extendSerialNumber

▸ **extendSerialNumber**<T\>(`page`: *number*, `pageSize`: *number*, `list`: T[]): T & { `$serialNumber`: *number*  }[]

为列表扩展序号字段

**`example`** 
```ts
const list = [{name: '小明'}, {name: '小红'}]
extendSerialNumber(1, 20, list) // -> [{$serialNumber: 1, name: '小明'}, {$serialNumber: 2, name: '小红'}]
extendSerialNumber(2, 20, list) // -> [{$serialNumber: 11, name: '小明'}, {$serialNumber: 12, name: '小红'}]
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`page` | *number* | 页码   |
`pageSize` | *number* | 每页条数   |
`list` | T[] | 数据列表   |

**Returns:** T & { `$serialNumber`: *number*  }[]

添加序号后的数据列表 `key=$serialNumber`

Defined in: [form/extendSerialNumber.ts:14](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/form/extendSerialNumber.ts#L14)

___

### getLocalStorage

▸ **getLocalStorage**<T\>(`key`: *string*): *null* \| T

获取LocalStorage key = `key` 的值

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | key   |

**Returns:** *null* \| T

经JSON.parse转换后的值

Defined in: [storage/getLocalStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/storage/getLocalStorage.ts#L6)

___

### getRegular

▸ **getRegular**(`type`: RegularType): *RegExp*

获取指定正则表达式

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | RegularType | 正则类型   |

**Returns:** *RegExp*

指定正则表达式

Defined in: [validate/getRegular.ts:8](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/validate/getRegular.ts#L8)

___

### getSessionStorage

▸ **getSessionStorage**<T\>(`key`: *string*): *null* \| T

获取SessionStorage key = `key` 的值

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | key   |

**Returns:** *null* \| T

经JSON.parse转换后的值

Defined in: [storage/getSessionStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/storage/getSessionStorage.ts#L6)

___

### isIE

▸ **isIE**(): *number* \| *false*

判断当前浏览器是否为ie

**Returns:** *number* \| *false*

number - ie浏览器版本 false - 不是ie

Defined in: [validate/isIE.ts:5](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/validate/isIE.ts#L5)

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

Defined in: [file/selectFiles.ts:6](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/file/selectFiles.ts#L6)

___

### setLocalStorage

▸ **setLocalStorage**<T\>(`key`: *string*, `value`: T): *void*

设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | key   |
`value` | T | - |

**Returns:** *void*

Defined in: [storage/setLocalStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/storage/setLocalStorage.ts#L6)

___

### setSessionStorage

▸ **setSessionStorage**<T\>(`key`: *string*, `value`: T): *void*

设置SessionStorage key = `key` 的值（值会通过JSON.stringify序列化）

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | key   |
`value` | T | - |

**Returns:** *void*

Defined in: [storage/setSessionStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/1a81324/src/storage/setSessionStorage.ts#L6)
