[rs-utils](../README.md) / [Exports](../modules.md) / form/extendSerialNumber

# Module: form/extendSerialNumber

## Table of contents

### Functions

- [extendSerialNumber](form_extendserialnumber.md#extendserialnumber)

## Functions

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

Defined in: [form/extendSerialNumber.ts:14](https://github.com/HanZhaorz/rs-utils/blob/b14f015/src/form/extendSerialNumber.ts#L14)
