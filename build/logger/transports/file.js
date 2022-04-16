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
import fs from 'fs-extra-promise';
import _ from 'lodash';
import { inspect } from 'util';
import { createTemplate, format } from '../format.js';
import Transport from './transport.js';
var defaultConfig = {
    level: 'info',
    template: createTemplate(format.level(), format.text(' - '), format.date('DD/MM/YYYY'), format.newLine(), format.location(), format.newLine(), format.message()),
};
var FileTransport = (function (_super) {
    __extends(FileTransport, _super);
    function FileTransport(unsafeConfig) {
        var _this = this;
        var config = __assign(__assign({}, defaultConfig), unsafeConfig);
        _this = _super.call(this, config) || this;
        console.log(config.path);
        _this.fileStream = fs.createWriteStream(config.path);
        return _this;
    }
    FileTransport.prototype.format = function (value) {
        if (_.isObject(value)) {
            return "\n".concat(inspect(value, false, null, false), "\n");
        }
        return String(value);
    };
    FileTransport.prototype.log = function (_a) {
        var message = _a.message, level = _a.level;
        this.fileStream.write("".concat(message, "\n"));
        return message;
    };
    return FileTransport;
}(Transport));
export default FileTransport;
//# sourceMappingURL=file.js.map