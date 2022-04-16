var _a;
import _ from 'lodash';
var levels = {
    emerg: 'emerg',
    alert: 'alert',
    crit: 'crit',
    error: 'error',
    warning: 'warning',
    notice: 'notice',
    info: 'info',
    debug: 'debug',
};
var levelsNumbers = (_a = {},
    _a[levels.emerg] = 0,
    _a[levels.alert] = 1,
    _a[levels.crit] = 2,
    _a[levels.error] = 3,
    _a[levels.warning] = 4,
    _a[levels.notice] = 5,
    _a[levels.info] = 6,
    _a[levels.debug] = 7,
    _a);
var getLevelNumber = function (lvl) {
    var result = levelsNumbers[lvl];
    return _.isNil(result) ? 10 : result;
};
var isAllowed = function (expectedLevel, level) {
    return getLevelNumber(level) <= getLevelNumber(expectedLevel);
};
export { getLevelNumber, isAllowed };
//# sourceMappingURL=levels.js.map