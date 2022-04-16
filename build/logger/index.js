var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createTemplate, format } from './format.js';
import { isAllowed } from './levels.js';
import { getLocation } from './location.js';
import transports from './transports/index.js';
import Transport from './transports/transport.js';
var defaultConfig = {
    transports: [new transports.console({ level: 'info' })],
    level: 'info',
};
var createLogger = function (unsafeConfig) {
    var config = __assign(__assign({}, defaultConfig), unsafeConfig);
    var log = function (level) {
        if (!isAllowed(config.level, level)) {
            return function (strings) {
                var expressions = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    expressions[_i - 1] = arguments[_i];
                }
            };
        }
        return function (strings) {
            var expressions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                expressions[_i - 1] = arguments[_i];
            }
            return config.transports.forEach(function (transport) {
                if (!transport.isAllowed(level)) {
                    return null;
                }
                var content = strings.reduce(function (prev, curr, index) {
                    var formatted = transport.format(expressions[index] || '');
                    return "".concat(prev).concat(curr).concat(formatted);
                }, '');
                var message = transport.getMessage({
                    level: level,
                    message: content,
                    date: new Date(),
                    location: getLocation(4),
                });
                return transport.log({ level: level, message: message });
            });
        };
    };
    return {
        log: log,
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
export { createLogger, transports, createTemplate, format, Transport, };
//# sourceMappingURL=index.js.map