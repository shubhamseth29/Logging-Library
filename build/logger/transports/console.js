var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import colors from 'colors/safe.js';
import _ from 'lodash';
import { inspect } from 'util';
import { createTemplate, format } from '../format.js';
import Transport from './transport.js';
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
var defaultConfig = {
    level: 'info',
    colorize: true,
    template: createTemplate(format.level(), format.text(' - '), format.date('DD/MM/YYYY'), format.newLine(), format.location(), format.newLine(), format.message()),
};
var ConsoleTransport = (function (_super) {
    __extends(ConsoleTransport, _super);
    function ConsoleTransport(unsafeConfig) {
        var config = __assign(__assign({}, defaultConfig), unsafeConfig);
        return _super.call(this, config) || this;
    }
    ConsoleTransport.prototype.format = function (value) {
        if (_.isObject(value)) {
            return "\n".concat(inspect(value, false, 2, true), "\n");
        }
        return String(value);
    };
    ConsoleTransport.prototype.getConsoleMethod = function (level) {
        var method = console[level];
        if (method) {
            return method.bind(console);
        }
        return console.log.bind(console);
    };
    ConsoleTransport.prototype.log = function (_a) {
        var message = _a.message, level = _a.level;
        var msg = message;
        var logToConsole = this.getConsoleMethod(level);
        if (this.config.colorize) {
            msg = colors[level](message);
        }
        logToConsole("".concat(msg, "\n"));
        return msg;
    };
    ConsoleTransport.colors = colors;
    return ConsoleTransport;
}(Transport));
export default ConsoleTransport;
//# sourceMappingURL=console.js.map