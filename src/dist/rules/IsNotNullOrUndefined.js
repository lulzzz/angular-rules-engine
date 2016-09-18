"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('./index');
var index_2 = require('./index');
var IsNotNullOrUndefined = (function (_super) {
    __extends(IsNotNullOrUndefined, _super);
    function IsNotNullOrUndefined(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
    }
    /**
     * If the target is null or undefined, the result will be false.
     */
    IsNotNullOrUndefined.prototype.render = function () {
        if (this.target == null || this.target === null || typeof this.target === "undefined") {
            this.isValid = false;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return IsNotNullOrUndefined;
}(index_1.SimpleRule));
exports.IsNotNullOrUndefined = IsNotNullOrUndefined;
//# sourceMappingURL=/rules/IsNotNullOrUndefined.js.map