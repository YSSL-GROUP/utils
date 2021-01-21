rs-utils

# rs-utils

## Table of contents

### Variables

- [Regular](README.md#regular)

### Functions

- [downloadViaBlob](README.md#downloadviablob)
- [downloadViaUrl](README.md#downloadviaurl)
- [ellipsis](README.md#ellipsis)
- [ellipsisStr](README.md#ellipsisstr)
- [extNo](README.md#extno)
- [getLocalStorage](README.md#getlocalstorage)
- [getSessionStorage](README.md#getsessionstorage)
- [isBoolean](README.md#isboolean)
- [isIE](README.md#isie)
- [isNullable](README.md#isnullable)
- [isNumber](README.md#isnumber)
- [isObject](README.md#isobject)
- [isString](README.md#isstring)
- [maskPhone](README.md#maskphone)
- [selectFiles](README.md#selectfiles)
- [setLocalStorage](README.md#setlocalstorage)
- [setSessionStorage](README.md#setsessionstorage)
- [toBase64](README.md#tobase64)
- [toFormData](README.md#toformdata)
- [toPct](README.md#topct)
- [toValue](README.md#tovalue)

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

Defined in: [validate/Regular.ts:35](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/validate/Regular.ts#L35)

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

Defined in: [action/downloadViaBlob.ts:7](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/action/downloadViaBlob.ts#L7)

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

Defined in: [action/downloadViaUrl.ts:7](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/action/downloadViaUrl.ts#L7)

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

Defined in: [style/ellipsis.ts:7](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/style/ellipsis.ts#L7)

___

### ellipsisStr

▸ **ellipsisStr**<D\>(`defaultValue`: D, `limit`: *number*, `str`: *string* \| *null*): *string* \| D

根据`limit`长度截取`str`加上省略号

**`example`** 
```ts
ellipsisStr('--', 4, "哈哈哈哈哈哈哈") // -> 哈哈哈哈...
ellipsisStr('--', 4, null) // -> "--"
```

#### Type parameters:

Name |
------ |
`D` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | D | `str` === null时默认显示的值   |
`limit` | *number* | 限制文字长度   |
`str` | *string* \| *null* | 文本   |

**Returns:** *string* \| D

截取并带省略号的字符串

Defined in: [style/ellipsisStr.ts:13](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/style/ellipsisStr.ts#L13)

___

### extNo

▸ **extNo**<T\>(`page`: *number*, `pageSize`: *number*, `list`: T[] \| *null*): T & { `$No`: *number*  }[]

为列表扩展序号字段 (ext是extend缩写,No是number order缩写)

**`example`** 
```ts
const list = [{name: '小明'}, {name: '小红'}]
extNo(1, 20, list) // -> [{$No: 1, name: '小明'}, {$No: 2, name: '小红'}]
extNo(2, 20, list) // -> [{$No: 11, name: '小明'}, {$No: 12, name: '小红'}]
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
`list` | T[] \| *null* | 数据列表   |

**Returns:** T & { `$No`: *number*  }[]

添加序号后的数据列表 `key=$No`

Defined in: [transform/extNo.ts:15](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/transform/extNo.ts#L15)

___

### getLocalStorage

▸ **getLocalStorage**(`type`: ValueType, `key`: *string*): *string* \| *number* \| AnyObject

获取LocalStorage key = `key` 的值

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ValueType | "string" | "number" | "object" | "array"   |
`key` | *string* | key   |

**Returns:** *string* \| *number* \| AnyObject

将`LocalStorage`的值转换指定`type`的值

Defined in: [storage/getLocalStorage.ts:9](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/storage/getLocalStorage.ts#L9)

___

### getSessionStorage

▸ **getSessionStorage**(`type`: ValueType, `key`: *string*): *string* \| *number* \| AnyObject

获取SessionStorage key = `key` 的值

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ValueType | "string" | "number" | "object" | "array"   |
`key` | *string* | key   |

**Returns:** *string* \| *number* \| AnyObject

将`SessionStorage`的值转换指定`type`的值

Defined in: [storage/getSessionStorage.ts:9](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/storage/getSessionStorage.ts#L9)

___

### isBoolean

▸ **isBoolean**(`value`: *any*): value is boolean

#### Parameters:

Name | Type |
------ | ------ |
`value` | *any* |

**Returns:** value is boolean

Defined in: [helper/guard.ts:11](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/helper/guard.ts#L11)

___

### isIE

▸ **isIE**(): *number* \| *false*

判断当前浏览器是否为ie

**Returns:** *number* \| *false*

(number - ie版本号) (false - 不是ie)

Defined in: [validate/isIE.ts:5](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/validate/isIE.ts#L5)

___

### isNullable

▸ **isNullable**(`value`: *any*): value is null

#### Parameters:

Name | Type |
------ | ------ |
`value` | *any* |

**Returns:** value is null

Defined in: [helper/guard.ts:3](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/helper/guard.ts#L3)

___

### isNumber

▸ **isNumber**(`value`: *any*): value is number

#### Parameters:

Name | Type |
------ | ------ |
`value` | *any* |

**Returns:** value is number

Defined in: [helper/guard.ts:7](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/helper/guard.ts#L7)

___

### isObject

▸ **isObject**(`value`: *any*): value is AnyObject

#### Parameters:

Name | Type |
------ | ------ |
`value` | *any* |

**Returns:** value is AnyObject

Defined in: [helper/guard.ts:19](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/helper/guard.ts#L19)

___

### isString

▸ **isString**(`value`: *any*): value is string

#### Parameters:

Name | Type |
------ | ------ |
`value` | *any* |

**Returns:** value is string

Defined in: [helper/guard.ts:15](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/helper/guard.ts#L15)

___

### maskPhone

▸ **maskPhone**<D\>(`defaultValue`: D, `phone`: *string* \| *number* \| *null*): *string* \| D

手机号脱敏

**`example`** 
```ts
maskPhone("--", 15536435235) // -> 155****5235
maskPhone("--", null) // -> --
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

Defined in: [transform/maskPhone.ts:12](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/transform/maskPhone.ts#L12)

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

Defined in: [action/selectFiles.ts:6](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/action/selectFiles.ts#L6)

___

### setLocalStorage

▸ **setLocalStorage**(`key`: *string*, `value`: *any*): *string*

设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | key   |
`value` | *any* | - |

**Returns:** *string*

Defined in: [storage/setLocalStorage.ts:7](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/storage/setLocalStorage.ts#L7)

___

### setSessionStorage

▸ **setSessionStorage**(`key`: *string*, `value`: *any*): *string*

设置SessionStorage key = `key` 的值（值会通过JSON.stringify序列化）

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | key   |
`value` | *any* | - |

**Returns:** *string*

Defined in: [storage/setSessionStorage.ts:7](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/storage/setSessionStorage.ts#L7)

___

### toBase64

▸ **toBase64**(`data`: File \| Blob \| *null*): *Promise*<*null* \| *string* \| ArrayBuffer\>

文件或二进制数据转换为base64格式

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | File \| Blob \| *null* | File | Blob 对象   |

**Returns:** *Promise*<*null* \| *string* \| ArrayBuffer\>

base64字符串

Defined in: [transform/toBase64.ts:7](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/transform/toBase64.ts#L7)

___

### toFormData

▸ **toFormData**(`obj?`: { [p in string]: any}): FormData

将普通对象转换成FormData对象

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`obj` | { [p in string]: any} | ... | 对象   |

**Returns:** FormData

FormData对象

Defined in: [transform/toFormData.ts:6](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/transform/toFormData.ts#L6)

___

### toPct

▸ **toPct**<D\>(`defaultValue`: D, `dividend`: *number* \| *string* \| *null*, `divisor`: *number* \| *string* \| *null*, `several?`: *number*): *string* \| D

计算百分比 (pct是percentage缩写)

**`example`** 
```ts
pct('--', 200, 20, 3) // -> 10.000%
pct('--', null, 20, 3) // -> --
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

Defined in: [transform/toPct.ts:14](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/transform/toPct.ts#L14)

___

### toValue

▸ **toValue**<T\>(`type`: ValueType, `value`: *string* \| *null*): *string* \| *number* \| AnyObject

将字符串转换为指定`type`值

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ValueType | "string" | "number" | "object" | "array"   |
`value` | *string* \| *null* | 值   |

**Returns:** *string* \| *number* \| AnyObject

Defined in: [transform/toValue.ts:10](https://github.com/HanZhaorz/rs-utils/blob/6d13754/src/transform/toValue.ts#L10)
