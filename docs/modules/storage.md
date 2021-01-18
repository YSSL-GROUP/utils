[rs-utils](../README.md) / [Modules](../modules.md) / storage

# Module: storage

## Table of contents

### Functions

- [getLocalStorage](storage.md#getlocalstorage)
- [getSessionStorage](storage.md#getsessionstorage)
- [setLocalStorage](storage.md#setlocalstorage)
- [setSessionStorage](storage.md#setsessionstorage)

## Functions

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

Defined in: [storage/getLocalStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/storage/getLocalStorage.ts#L6)

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

Defined in: [storage/getSessionStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/storage/getSessionStorage.ts#L6)

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

Defined in: [storage/setLocalStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/storage/setLocalStorage.ts#L6)

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

Defined in: [storage/setSessionStorage.ts:6](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/storage/setSessionStorage.ts#L6)
