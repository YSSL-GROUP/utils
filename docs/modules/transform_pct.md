[rs-utils](../README.md) / transform/pct

# Module: transform/pct

## Table of contents

### Functions

- [pct](transform_pct.md#pct)

## Functions

### pct

▸ **pct**<D\>(`defaultValue`: D, `dividend`: *number* \| *string* \| *null*, `divisor`: *number* \| *string* \| *null*, `several?`: *number*): *string* \| D

计算百分比 (pct是percentage缩写)

**`example`** 
```ts
pct('--', 200, 20, 3) // -> 10.000%
pct('--', null, 20, 3) // -> --
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

Defined in: [transform/pct.ts:14](https://github.com/HanZhaorz/rs-utils/blob/c9a74b1/src/transform/pct.ts#L14)
