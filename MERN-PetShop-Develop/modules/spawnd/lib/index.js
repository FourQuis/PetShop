"use strict";

var _util = require("util");

var _child_process = require("child_process");

var _treeKill = _interopRequireDefault(require("tree-kill"));

var _exit = _interopRequireDefault(require("exit"));

var _signalExit = _interopRequireDefault(require("signal-exit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pTreeKill = (0, _util.promisify)(_treeKill.default);

function spawnd(command, options) {
  function cleanExit(code = 1) {
    if (proc && proc.pid) {
      (0, _treeKill.default)(proc.pid, () => (0, _exit.default)(code));
    } else {
      (0, _exit.default)(code);
    }
  }

  const proc = (0, _child_process.spawn)(command, options);
  proc.stderr.pipe(process.stderr);
  proc.on('exit', cleanExit);
  proc.on('error', () => cleanExit(1));
  const removeExitHandler = (0, _signalExit.default)(code => {
    cleanExit(typeof code === 'number' ? code : 1);
  });

  proc.destroy = async () => {
    removeExitHandler();
    proc.removeAllListeners('exit');
    proc.removeAllListeners('error');
    return pTreeKill(proc.pid).catch(() => {
      /* ignore error */
    });
  };

  return proc;
}

module.exports = spawnd;