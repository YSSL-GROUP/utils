[rs-utils](../README.md) / style/ellipsisStr

# Module: style/ellipsisStr

## Table of contents

### Functions

- [ellipsisStr](style_ellipsisstr.md#ellipsisstr)

## Functions

### ellipsisStr

▸ **ellipsisStr**<D\>(`defaultValue`: D, `limit`: *number*, `str`: *string* \| *null*): *string* \| D

根据`limit`长度截取`str`加上省略号

**`example`** 
```ts
ellipsisStr('--', 4, "哈哈哈哈哈哈哈") // -> 哈哈哈哈...
ellipsisStr('--', 4, null) // -> "--"
```

#### Type parameters:

Name |
------ |
`D` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | D | `str` === null时默认显示的值   |
`limit` | *number* | 限制文字长度   |
`str` | *string* \| *null* | 文本   |

**Returns:** *string* \| D

截取并带省略号的字符串

Defined in: [style/ellipsisStr.ts:13](https://github.com/HanZhaorz/rs-utils/blob/c9a74b1/src/style/ellipsisStr.ts#L13)
