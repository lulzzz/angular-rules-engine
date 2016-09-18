"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('./index');
var index_2 = require('./index');
var IsTrue = (function (_super) {
    __extends(IsTrue, _super);
    function IsTrue(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = true; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
    }
    IsTrue.prototype.render = function () {
        this.isValid = true;
        if (this.target === false) {
            this.isValid = false;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return IsTrue;
}(index_1.SimpleRule));
exports.IsTrue = IsTrue;
//# sourceMappingURL=/rules/IsTrue.js.map