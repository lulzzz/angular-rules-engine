"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Index_1 = require('./Index');
var Index_2 = require('./Index');
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
        return new Index_2.RuleResult(this, this.target);
    };
    return IsFalse;
}(Index_1.SimpleRule));
exports.IsFalse = IsFalse;
//# sourceMappingURL=IsFalse.js.map