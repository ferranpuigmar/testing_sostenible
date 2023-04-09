"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.it = exports.test = exports.describe = exports.expect = void 0;
function expect(expected) {
    return {
        toBe(result) {
            if (result !== expected)
                throw new Error(`${result} is not equal to ${expected}`);
        }
    };
}
exports.expect = expect;
function describe(context, callback) {
    console.log(context);
    callback();
}
exports.describe = describe;
function test(description, callback) {
    try {
        isPromise(callback())
            ? evaluatePromise(description, callback)
            : evaluate(description, callback);
    }
    catch (error) {
        console.log(`❌ ${description} ${error}`);
    }
}
exports.test = test;
function evaluate(description, callback) {
    callback();
    console.log(`✅ ${description}`);
}
function evaluatePromise(description, callback) {
    (callback())
        .then(() => console.log(`✅ ${description}`))
        .catch(error => console.log(`❌ ${description} ${error}`));
}
function isPromise(promise) {
    return !!promise && typeof promise.then === 'function';
}
exports.it = test;
//# sourceMappingURL=testLibs.js.map