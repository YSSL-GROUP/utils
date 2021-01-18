[rs-utils](../README.md) / [Exports](../modules.md) / format/encryptPhone

# Module: format/encryptPhone

## Table of contents

### Functions

- [encryptPhone](format_encryptphone.md#encryptphone)

## Functions

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

Defined in: [format/encryptPhone.ts:12](https://github.com/HanZhaorz/rs-utils/blob/b14f015/src/format/encryptPhone.ts#L12)
