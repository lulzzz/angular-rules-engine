"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('./index');
var index_2 = require('./index');
var IsFalse = (function (_super) {
    __extends(IsFalse, _super);
    function IsFalse(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
    }
    IsFalse.prototype.render = function () {
        if (this.target) {
            this.isValid = false;
        }
        return new index_2.RuleResult(this, this.target);
    };
    return IsFalse;
}(index_1.SimpleRule));
exports.IsFalse = IsFalse;
//# sourceMappingURL=/rules/IsFalse.js.map