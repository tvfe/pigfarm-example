function createCopyFunc(type) {
    return function (a, b) {
        var args = arguments;
        for (let i = 2, len = args.length; i < len; i ++) {
            var key = args[i];
            var val = a[key];
            if (val && typeof val == type) {
                b[key] = val;
            }
        }
    };
}

module.exports = {
    copyNumbers: createCopyFunc('number'),
    copyStrings: createCopyFunc('string')
};