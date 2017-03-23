"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("./index");
/**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maxiumum length.
 */
var StringIsNotNullEmptyRange = (function (_super) {
    __extends(StringIsNotNullEmptyRange, _super);
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rule(s) will be evaluated against.
     * @param minLength: The minimum allowed length of the target value.
     * @param maxLength: The maximum allowed length of the target value.
     */
    function StringIsNotNullEmptyRange(name, message, target, minLength, maxLength, isDisplayable) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.minLength = minLength;
        _this.maxLength = maxLength;
        _this.configureRules();
        return _this;
    }
    /**
     * A helper method to configure/add rules to the validation context.
     */
    StringIsNotNullEmptyRange.prototype.configureRules = function () {
        this.rules.push(new index_2.IsNotNullOrUndefined('StringIsNotNull', 'The string target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new index_3.Range('TargetLengthIsWithinRange', 'The string value is not within the specified range.', this.target.toString().length, this.minLength, this.maxLength));
        }
    };
    return StringIsNotNullEmptyRange;
}(index_1.CompositeRule));
exports.StringIsNotNullEmptyRange = StringIsNotNullEmptyRange;
//# sourceMappingURL=/rules/StringIsNotNullEmptyRange.js.map