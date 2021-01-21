export type NumberStr = "number";
export type ObjectStr = "object";
export type StringStr = "string";
export type BooleanStr = "boolean";
export type ArrayStr = "array";
export type ValueType = NumberStr | ObjectStr | StringStr | ArrayStr | BooleanStr;

export type AnyObject = { [p in string]: AnyObject | any };
export type StringObject = { [p in string]: StringObject | string };
export type NumberObject = { [p in string]: StringObject | number };
