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
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import _ from 'lodash';
import { inspect } from 'util';
import { createTemplate, format } from '../format.js';
import Transport from './transport.js';
var defaultConfig = {
    level: 'info',
    template: createTemplate(format.level(), format.text(' - '), format.date('DD/MM/YYYY'), format.newLine(), format.location(), format.newLine(), format.message()),
};
var FirebaseTransport = (function (_super) {
    __extends(FirebaseTransport, _super);
    function FirebaseTransport(unsafeConfig) {
        var config = __assign(__assign({}, defaultConfig), unsafeConfig);
        return _super.call(this, config) || this;
    }
    FirebaseTransport.prototype.format = function (value) {
        if (_.isObject(value)) {
            return "\n".concat(inspect(value, false, null, false), "\n");
        }
        return String(value);
    };
    FirebaseTransport.prototype.log = function (_a) {
        var message = _a.message, level = _a.level;
        var firebaseConfig = {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            databaseURL: this.config.databaseURL,
            projectId: this.config.projectId,
            storageBucket: this.config.storageBucket,
            messagingSenderId: this.config.messagingSenderId,
            appId: this.config.appId,
            measurementId: this.config.measurementId
        };
        var app = initializeApp(firebaseConfig);
        var db = getDatabase();
        set(ref(db, 'logsId/' + '1'), {
            message: message
        });
        return message;
    };
    return FirebaseTransport;
}(Transport));
export default FirebaseTransport;
//# sourceMappingURL=firebase.js.map