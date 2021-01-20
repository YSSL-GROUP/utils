[rs-utils](../README.md) / storage/getLocalStorage

# Module: storage/getLocalStorage

## Table of contents

### Functions

- [getLocalStorage](storage_getlocalstorage.md#getlocalstorage)

## Functions

### getLocalStorage

▸ **getLocalStorage**(`type`: [*ValueType*](helper_type.md#valuetype), `key`: *string*): *string* \| *number* \| [*AnyObject*](helper_type.md#anyobject)

获取LocalStorage key = `key` 的值

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [*ValueType*](helper_type.md#valuetype) | "string" | "number" | "object" | "array"   |
`key` | *string* | key   |

**Returns:** *string* \| *number* \| [*AnyObject*](helper_type.md#anyobject)

将`LocalStorage`的值转换指定`type`的值

Defined in: [storage/getLocalStorage.ts:9](https://github.com/HanZhaorz/rs-utils/blob/c9a74b1/src/storage/getLocalStorage.ts#L9)
