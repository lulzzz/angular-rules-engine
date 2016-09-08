"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dCompare = require('typescript-dotnet-commonjs/System/Compare');
var Compare = dCompare;
var Index_1 = require('./Index');
var Index_2 = require('./Index');
/**
 * Use the [Min] rule to determine if the target value is equal to or greater than the minimum
 * allowed value [comparison].
 */
var Min = (function (_super) {
    __extends(Min, _super);
    function Min(name, message, target, comparison, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        _super.call(this, name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }
    Min.prototype.render = function () {
        var compareResult = Compare.compare(this.target, this.comparison, true);
        if (compareResult === -1 /* Less */) {
            this.isValid = true;
        }
        return new Index_2.RuleResult(this, this.target);
    };
    return Min;
}(Index_1.SimpleRule));
exports.Min = Min;
//# sourceMappingURL=Min.js.map