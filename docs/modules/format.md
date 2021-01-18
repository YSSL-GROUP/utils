[rs-utils](../README.md) / [Modules](../modules.md) / format

# Module: format

## Table of contents

### Functions

- [calculatePercentage](format.md#calculatepercentage)
- [encryptPhone](format.md#encryptphone)

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

Defined in: [format/calculatePercentage.ts:14](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/format/calculatePercentage.ts#L14)

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

Defined in: [format/encryptPhone.ts:12](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/format/encryptPhone.ts#L12)
