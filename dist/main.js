"use strict";

var _commander = require("commander");

var _constants = require("./utils/constants.js");

var _index = _interopRequireDefault(require("./index"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// chalk包必须通过ESModule来导入
let actionMap = {
  init: {
    description: 'init a new program from a template',
    usages: ['sub init templateName projectName']
  },
  config: {
    alias: 'cfg',
    description: 'config .subrc',
    usages: ['sub config set <k> <v>', 'sub config get <k>', 'sub config remove <k>']
  }
}; // 引入响应命令对应的函数，并传入参数调用

Object.keys(actionMap).forEach(cmd => {
  _commander.program.command(cmd).description(actionMap[cmd].description).action(() => {
    switch (cmd) {
      case 'config':
        (0, _index.default)(cmd, ...process.argv.slice(3));
        break;

      case 'init':
        (0, _index.default)(cmd, ...process.argv.slice(3));
        break;

      default:
        break;
    }
  });
});

_commander.program.usage('<command> [options]');

_commander.program.version(_constants.VERSION, '-v --version');

_commander.program.parse(process.argv); // if(!process.argv.slice(2).length) {
//     program.outputHelp(chalk.green)
// }