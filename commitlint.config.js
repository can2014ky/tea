// 方法一：安装 npm install --save-dev @commitlint/config-conventional @commitlint/cli
// 生成配置文件commitlint.config.js 或 .commitlintrc.js
// echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

module.exports = { extends: ['@commitlint/config-conventional'] };

// 方法二：定制提交规范
// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [
//       2,
//       'always',
//       ['upd', 'feat', 'fix', 'refactor', 'test', 'docs', 'chore', 'ci', 'build', 'merge', 'style', 'perf' 'revert'],
//     ],
//     'type-case': [0],
//     'type-empty': [0],
//     'scope-empty': [0],
//     'scope-case': [0],
//     'subject-full-stop': [0, 'never'],
//     'subject-case': [0, 'never'],
//     'header-max-length': [0, 'always', 72],
//   },
// };
