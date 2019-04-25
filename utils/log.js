const chalk = require('chalk');

const { LOG_LEVEL } = require("../config");

const map = {
  debug: 3,
  info: 2,
  warn: 1,
  error: 0
};

class Log {
  constructor(level) {
    this.levelNo = map[level];
  };

  print (level, label, msg) {
    const currentLevelNo = map[level];
    if (currentLevelNo <= this.levelNo) {
      let type = level === 'debug' ? 'log' : level;
      console[type](`${level}`, ` ${label}:`, msg);
    }
  };

  debug(label, msg) { this.print(chalk.green('debug'), label, msg); };
  info(label, msg) { this.print(chalk.cyan('info'), label, msg); };
  warn(label, msg) { this.print(chalk.yellow('warn'), label, msg); };
  error(label, msg) { this.print(chalk.red('error'), label, msg); };
}

const log = new Log(LOG_LEVEL);
module.exports = log;
