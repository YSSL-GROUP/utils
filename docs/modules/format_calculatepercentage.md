[rs-utils](../README.md) / [Exports](../modules.md) / format/calculatePercentage

# Module: format/calculatePercentage

## Table of contents

### Functions

- [calculatePercentage](format_calculatepercentage.md#calculatepercentage)

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

Defined in: [format/calculatePercentage.ts:14](https://github.com/HanZhaorz/rs-utils/blob/b14f015/src/format/calculatePercentage.ts#L14)
