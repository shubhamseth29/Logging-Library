var getLocation = function (stepInStack) {
    if (stepInStack === void 0) { stepInStack = 1; }
    try {
        throw new Error('Log stack');
    }
    catch (e) {
        try {
            var err = e;
            var stackLocations = err.stack
                .split('\n')
                .map(function (m) { return m.trim(); })
                .filter(function (m) { return m.startsWith('at'); });
            return String(stackLocations[stepInStack]).slice(3);
        }
        catch (e) {
            return '';
        }
    }
};
export { getLocation };
//# sourceMappingURL=location.js.map