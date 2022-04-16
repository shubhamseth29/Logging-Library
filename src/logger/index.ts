import { createTemplate, format } from './format.js';
import { isAllowed, Level } from './levels.js';
import { getLocation } from './location.js';
import transports from './transports/index.js';
import Transport, { TransportConfig } from './transports/transport.js';


interface Config {
  transports?: Transport[];
  level?: Level;
}

const defaultConfig: Config = {
  transports: [new transports.console({ level: 'info' })],
  level: 'info',
};

const createLogger = (unsafeConfig?: Config) => {
  const config = { ...defaultConfig, ...unsafeConfig };

  const log = (level: Level) => {
    if (!isAllowed(config.level, level)) {
      return (strings: TemplateStringsArray, ...expressions): void => {};
    }

    return (strings: TemplateStringsArray, ...expressions): void => {
      return config.transports.forEach((transport) => {
        if (!transport.isAllowed(level)) {
          return null;
        }

        const content = strings.reduce((prev, curr, index) => {
          const formatted = transport.format(expressions[index] || '');

          return `${prev}${curr}${formatted}`;
        }, '');

        const message = transport.getMessage({
          level,
          message: content,
          date: new Date(),
          location: getLocation(4),
        });

        return transport.log({ level, message });
      });
    };
  };

  return {
    log,
    emerg: log('emerg'),
    alert: log('alert'),
    crit: log('crit'),
    error: log('error'),
    warning: log('warning'),
    notice: log('notice'),
    info: log('info'),
    debug: log('debug'),
  };
};

export {
  createLogger,
  transports,
  createTemplate,
  format,
  Transport,
  TransportConfig,
};
