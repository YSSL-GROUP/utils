[rs-utils](../README.md) / [Modules](../modules.md) / style

# Module: style

## Table of contents

### Functions

- [ellipsis](style.md#ellipsis)
- [ellipsisStr](style.md#ellipsisstr)

## Functions

### ellipsis

▸ **ellipsis**<T\>(`el`: T): *FunctionComponentElement*<*any*\>

为el节点添加单行省略样式（节点需要有固定宽度）

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *Element*<T\> |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`el` | T | react节点   |

**Returns:** *FunctionComponentElement*<*any*\>

el

Defined in: [style/ellipsis.ts:7](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/style/ellipsis.ts#L7)

___

### ellipsisStr

▸ **ellipsisStr**(`limit`: *number*, `str`: *string* \| *null*): *string*

根据`limit`长度截取`str`加上省略号

**`example`** 
```ts
ellipsisStr(4, "哈哈哈哈哈哈哈") // -> 哈哈哈哈...
ellipsisStr(4, null) // -> ""
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`limit` | *number* | 限制文字长度   |
`str` | *string* \| *null* | 文本   |

**Returns:** *string*

截取并带省略号的字符串

Defined in: [style/ellipsisStr.ts:12](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/style/ellipsisStr.ts#L12)
