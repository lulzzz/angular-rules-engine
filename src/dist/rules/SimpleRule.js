"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RulePolicy_1 = require('./RulePolicy');
/**
 * Use this class as a base [extends] class for simple rules. A simple contains
 * a single rule and target to evaluate.
 *
 * If you require a rule that will contain more than one rule, you should
 * use extend the [CompositeRule] class.
 */
var SimpleRule = (function (_super) {
    __extends(SimpleRule, _super);
    /**
     * The constructor for the simple rule.
     * @param name: The name of the rule.
     * @param message: The message to display if the rule is violated.
     */
    function SimpleRule(name, message, isDisplayable) {
        _super.call(this, name, message, isDisplayable);
    }
    return SimpleRule;
}(RulePolicy_1.RulePolicy));
exports.SimpleRule = SimpleRule;
//# sourceMappingURL=/rules/SimpleRule.js.map