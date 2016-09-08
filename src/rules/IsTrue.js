"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Index_1 = require('./Index');
var Index_2 = require('./Index');
var IsTrue = (function (_super) {
    __extends(IsTrue, _super);
    function IsTrue(name, message, target, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = true; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
    }
    IsTrue.prototype.render = function () {
        this.isValid = false;
        if (!this.target) {
            this.isValid = false;
        }
        return new Index_2.RuleResult(this, this.target);
    };
    return IsTrue;
}(Index_1.SimpleRule));
exports.IsTrue = IsTrue;
