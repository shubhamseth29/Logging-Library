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
import { isAllowed } from '../levels.js';
var defaultConfig = {
    template: function (_a) {
        var message = _a.message;
        return message;
    },
    format: JSON.stringify,
    level: 'info',
};
var Transport = (function () {
    function Transport(config) {
        this.config = __assign(__assign({}, defaultConfig), config);
    }
    Transport.prototype.isAllowed = function (level) {
        return isAllowed(this.config.level, level);
    };
    Transport.prototype.log = function (_a) {
        var message = _a.message, level = _a.level;
        return message;
    };
    Transport.prototype.format = function (value) {
        return this.config.format(value);
    };
    Transport.prototype.getMessage = function (info) {
        return this.config.template(info);
    };
    return Transport;
}());
export default Transport;
//# sourceMappingURL=transport.js.map