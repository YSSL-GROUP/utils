# TODO

## functions

### fp

- [ ] Maybe
- [ ] Either
- [ ] IO

### file

- [X] convertToBase64 - 文件或二进制数据转换为base64格式
- [X] downloadViaBlob - 通过二进制数据下载文件
- [X] downloadViaUrl - 通过链接地址下载文件
- [X] selectFiles - 调用浏览器文件选择

### form

- [X] convertToFormData - 将普通对象转换成FormData对象
- [X] extendSerialNumber - 为列表扩展序号字段

### format

- [X] calculatePercentage - 计算百分比
- [X] encryptPhone - 手机号脱敏

### storage

- [X] getLocalStorage - 获取LocalStorage key = `key` 的值
- [X] setLocalStorage - 设置LocalStorage key = `key` 的值（值会通过JSON.stringify序列化）
- [X] getSessionStorage - 获取SessionStorage key = `key` 的值
- [X] setSessionStorage - 设置SessionStorage key = `key` 的值（值会通过JSON.stringify序列化）

### style

- [X] ellipsis - 为el节点添加单行省略样式（节点需要有固定宽度）
- [X] ellipsisStr - 根据`limit`长度截取`str`加上省略号

### validate

- [X] getRegular - 获取指定正则表达式
- [X] Regular - 所有正则表达式
- [X] isIE - 判断当前浏览器是否为ie

## standard

### docs

- [ ] 文档

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
