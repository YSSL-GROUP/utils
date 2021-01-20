[rs-utils](../README.md) / storage/getSessionStorage

# Module: storage/getSessionStorage

## Table of contents

### Functions

- [getSessionStorage](storage_getsessionstorage.md#getsessionstorage)

## Functions

### getSessionStorage

▸ **getSessionStorage**(`type`: [*ValueType*](helper_type.md#valuetype), `key`: *string*): *string* \| *number* \| [*AnyObject*](helper_type.md#anyobject)

获取SessionStorage key = `key` 的值

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [*ValueType*](helper_type.md#valuetype) | "string" | "number" | "object" | "array"   |
`key` | *string* | key   |

**Returns:** *string* \| *number* \| [*AnyObject*](helper_type.md#anyobject)

将`SessionStorage`的值转换指定`type`的值

Defined in: [storage/getSessionStorage.ts:9](https://github.com/HanZhaorz/rs-utils/blob/c9a74b1/src/storage/getSessionStorage.ts#L9)
