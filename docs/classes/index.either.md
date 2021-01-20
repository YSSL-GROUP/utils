[rs-utils](../README.md) / [index](../modules/index.md) / Either

# Class: Either<V\>

[index](../modules/index.md).Either

## Type parameters

Name |
------ |
`V` |

## Hierarchy

* **Either**

## Table of contents

### Constructors

- [constructor](index.either.md#constructor)

### Properties

- [value](index.either.md#value)

### Methods

- [of](index.either.md#of)

## Constructors

### constructor

\+ **new Either**<V\>(`value`: V): [*Either*](index.either.md)<V\>

#### Type parameters:

Name |
------ |
`V` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | V |

**Returns:** [*Either*](index.either.md)<V\>

Defined in: [fp/Either.ts:1](https://github.com/HanZhaorz/rs-utils/blob/487e704/src/fp/Either.ts#L1)

## Properties

### value

• `Readonly` **value**: V

## Methods

### of

▸ `Static`**of**<T\>(`value`: T): T *extends* *null* ? *Left*<T\> : *Right*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** T *extends* *null* ? *Left*<T\> : *Right*<T\>

Defined in: [fp/Either.ts:4](https://github.com/HanZhaorz/rs-utils/blob/487e704/src/fp/Either.ts#L4)
