# `@YSSL/utils`

服务与公司业务，将经常使用的函数抽离，避免频繁**copy**

[目前完成度](TODO.md)

[文档](docs/README.md)

## 设计理念

命名简单易懂、使用简单为目的，尽量对传入可能为`null`的值进行处理（因为项目中经常有字段值为`null`，非常可恶！）。字符转默认值统一为`--`，并提供修改默认值的参数。

## 规范注意事项

1. 使用`yarn commit`进行代码提交

2. 使用`yarn release`进行版本发布

3. 使用`typescript`进行开发

4. 思考中...🤔

## 发布流程

1. `yarn build`构建项目

2. `git add .`

3. 使用`yarn commit`进行代码提交

4. `git push`

5. 使用`yarn release`进行版本发布
