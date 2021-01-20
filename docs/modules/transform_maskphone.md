[rs-utils](../README.md) / transform/maskPhone

# Module: transform/maskPhone

## Table of contents

### Functions

- [maskPhone](transform_maskphone.md#maskphone)

## Functions

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

Defined in: [transform/maskPhone.ts:12](https://github.com/HanZhaorz/rs-utils/blob/c9a74b1/src/transform/maskPhone.ts#L12)
