# TODO

## functions

### fp

- [ ] Maybe
- [ ] Either - beta
- [ ] IO

### algorithm

### action

- [X] downloadViaBlob - 通过二进制数据下载文件
- [X] downloadViaUrl - 通过链接地址下载文件
- [X] selectFiles - 调用浏览器文件选择

### transform

- [X] toBase64 - 文件或二进制数据转换为base64格式
- [X] pct - 计算百分比
- [X] maskPhone - 手机号脱敏
- [X] toFormData - 将普通对象转换成FormData对象
- [X] extNo - 为列表扩展序号字段
- [X] toStr - 将任意类型转换为`string`
- [X] toValue - 将任意值转换为指定`type`值
- [X] toQuery - 请求参数对象转换为字符串拼接

### storage

- [X] getLocalStorage - 获取LocalStorage key = `key` 的值并转换为指定`type`值
- [X] setLocalStorage - 设置LocalStorage key = `key` 的值
- [X] getSessionStorage - 获取SessionStorage key = `key` 的值并转换为指定`type`值
- [X] setSessionStorage - 设置SessionStorage key = `key` 的值

### style

- [X] ellipsis - 为el节点添加单行省略样式（节点需要有固定宽度）
- [X] ellipsisStr - 根据`limit`长度截取`str`加上省略号

### validate

- [X] getRegular - 获取指定正则表达式
- [X] Regular - 所有正则表达式
- [X] isIE - 判断当前浏览器是否为ie

### helper

- [X] isNullable
- [X] isNumber
- [X] isBoolean
- [X] isString
- [X] isObject

## standard

### docs

- [ ] 文档 - 暂有糙版

### build

- [ ] 拆分
- [X] rollup

### eslint

- [X] eslint
- [X] prettier
- [X] editorconfig

### typescript

- [ ] 类型优化
- [X] typescript

### git

- [ ] 规范提交插件
- [X] gitignore
