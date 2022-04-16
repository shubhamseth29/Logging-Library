import colors from 'colors/safe.js';
import _ from 'lodash';
import { inspect } from 'util';
import { createTemplate, format } from '../format.js';
import Transport, { TransportConfig } from './transport.js';



colors.setTheme({
  emerg: 'red',
  alert: 'orange',
  crit: 'red',
  error: 'cyan',
  warning: 'yellow',
  notice: 'blue',
  info: 'green',
  debug: 'rainbow',
});

interface Config extends TransportConfig {
  colorize?: boolean;
}

const defaultConfig: Partial<Config> = {
  level: 'info',
  colorize: true,
  template: createTemplate(
    format.level(),
    format.text(' - '),
    format.date('DD/MM/YYYY'),
    format.newLine(),
    format.location(),
    format.newLine(),
    format.message(),
  ),
};

class ConsoleTransport extends Transport<Config> {
  public static colors = colors;

  public constructor(unsafeConfig: Config) {
    const config = { ...defaultConfig, ...unsafeConfig };

    super(config);
  }

  public format(value: any): string {
    if (_.isObject(value)) {
      return `\n${inspect(value, false, 2, true)}\n`;
    }

    return String(value);
  }

  private getConsoleMethod(level: string) {
    const method = console[level];

    if (method) {
      return method.bind(console);
    }

    return console.log.bind(console);
  }

  public log({ message, level }: { message: string; level: string }) {
    let msg = message;

    const logToConsole = this.getConsoleMethod(level);

    if (this.config.colorize) {
      msg = colors[level](message);
    }

    logToConsole(`${msg}\n`);

    return msg;
  }
}

export default ConsoleTransport;
