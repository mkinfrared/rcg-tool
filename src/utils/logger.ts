import chalk from "chalk";

class Logger {
  info = (msg: string) => {
    const value = chalk.whiteBright.bgBlue(msg);

    console.log(value);
  };

  error = (msg: string) => {
    const value = chalk.whiteBright.bgRed(msg);

    console.log(value);
  };

  success = (msg: string) => {
    const value = chalk.whiteBright.bgGreen(msg);

    console.log(value);
  };
}

const logger = new Logger();

export default logger;
