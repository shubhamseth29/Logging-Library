import moment from 'moment';
import emoji from 'node-emoji';
var format = {
    date: function (format) { return function (_a) {
        var date = _a.date;
        return moment(date).format(format);
    }; },
    location: function () { return function (_a) {
        var location = _a.location;
        return location;
    }; },
    message: function () { return function (_a) {
        var message = _a.message;
        return message;
    }; },
    text: function (message) { return function () { return emoji.emojify(message); }; },
    level: function () { return function (_a) {
        var level = _a.level;
        return level.toUpperCase();
    }; },
    newLine: function () { return function () { return '\n'; }; },
};
var createTemplate = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (info) {
        return fns.reduce(function (prev, curr) {
            return "".concat(prev).concat(curr(info));
        }, '');
    };
};
export { createTemplate, format };
//# sourceMappingURL=format.js.map