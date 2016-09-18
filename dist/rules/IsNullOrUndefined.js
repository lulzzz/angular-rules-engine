"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('./index');
var index_2 = require('./index');
var IsNullOrUndefined = (function (_super) {
    __extends(IsNullOrUndefined, _super);
    function IsNullOrUndefined(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
    }
    IsNullOrUndefined.prototype.render = function () {
        if (this.target == null || typeof this.target === undefined || typeof this.target === "undefined") {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return IsNullOrUndefined;
}(index_1.SimpleRule));
exports.IsNullOrUndefined = IsNullOrUndefined;
//# sourceMappingURL=/rules/IsNullOrUndefined.js.map