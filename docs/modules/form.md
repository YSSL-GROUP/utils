[rs-utils](../README.md) / [Modules](../modules.md) / form

# Module: form

## Table of contents

### Functions

- [convertToFormData](form.md#converttoformdata)
- [extendSerialNumber](form.md#extendserialnumber)

## Functions

### convertToFormData

▸ **convertToFormData**(`obj?`: { [p in string]: any}): FormData

将普通对象转换成FormData对象

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`obj` | { [p in string]: any} | ... | 对象   |

**Returns:** FormData

FormData对象

Defined in: [form/convertToFormData.ts:6](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/form/convertToFormData.ts#L6)

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

Defined in: [form/extendSerialNumber.ts:14](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/form/extendSerialNumber.ts#L14)
