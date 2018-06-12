# 代码提交规范

使用规范的约束的目的是为了自动生成更新日志，更直观的记录项目内容的变化，同时养成良好的代码提交习惯。<br>
提交格式请参考 [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)。
如果不熟悉规范，推荐使用 `npm run commit` 或者 `git cz` 来代替 `git commit`，他们提供了命令交互的方式来生成信息。

## 信息类型说明

```
feat: 新功能（feature）
fix: 修补bug
docs: 文档（documentation）
style: 格式（不影响代码运行的变动，例如空格、eof、分号等）
refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
perf: 性能优化（performance）
test: 增加或修改测试
build: 打包代码
ci: 持续集成配置变更（Travis, Circle, BrowserStack, SauceLabs等）
chore: 构建过程或辅助工具的变动
revert: 回滚之前的提交
```
