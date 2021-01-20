[rs-utils](../README.md) / transform/extNo

# Module: transform/extNo

## Table of contents

### Functions

- [extNo](transform_extno.md#extno)

## Functions

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

Defined in: [transform/extNo.ts:15](https://github.com/HanZhaorz/rs-utils/blob/c9a74b1/src/transform/extNo.ts#L15)
