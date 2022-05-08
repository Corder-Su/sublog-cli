"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.remove = exports.getAll = exports.get = void 0;

var _constants = require("./constants");

var _util = require("util");

var _ini = require("ini");

var _chalk = _interopRequireDefault(require("chalk"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const exist = (0, _util.promisify)(_fs.default.existsSync);
const readfile = (0, _util.promisify)(_fs.default.readFile);
const writefile = (0, _util.promisify)(_fs.default.writeFile);

const get = async key => {
  const exit = await exist(_constants.RC);
  let opts;

  if (exist) {
    opts = await readfile(_constants.RC, 'utf-8');
    opts = (0, _ini.decode)(opts);
    return opts[key];
  }

  return '';
}; // 读取配置文件中的参数


exports.get = get;

const getAll = async () => {
  const exit = await exist(_constants.RC);
  let opts;

  if (exist) {
    opts = await readfile(_constants.RC, 'utf-8');
    opts = (0, _ini.decode)(opts);
    return opts;
  }

  return {};
};

exports.getAll = getAll;

const set = async (key, value) => {
  const exit = await exist(_constants.RC);
  let opts;

  if (exist) {
    opts = await readfile(_constants.RC, 'utf-8');
    opts = (0, _ini.decode)(opts);

    if (!key) {
      console.log(_chalk.default.red(_chalk.default.bold('Error:')), _chalk.default.red(' key is required'));
      return;
    }

    if (!value) {
      console.log(_chalk.default.red(_chalk.default.bold('Error:')), _chalk.default.red(' value is required'));
      return;
    }

    Object.assign(opts, {
      [key]: value
    });
  } else {
    opts = Object.assign({}, {
      [key]: value
    });
  }

  await writefile(_constants.RC, (0, _ini.encode)(opts), 'utf-8');
};

exports.set = set;

const remove = async key => {
  const exit = await exist(_constants.RC);
  let opts;

  if (exist) {
    opts = await readfile(_constants.RC, 'utf-8');
    opts = (0, _ini.decode)(opts);
    delete opts[key];
    await writefile(_constants.RC, (0, _ini.encode)(opts), 'utf-8');
  }
};

exports.remove = remove;