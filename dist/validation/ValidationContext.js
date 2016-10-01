"use strict";
var index_1 = require('./index');
/**
 * Use this class to create a new Validation Context for your application. With this
 * context, you can add rules and evaluate the rules.
 *
 * After the rules are evaluated, you can use the Validation Context to determine if there are
 * any rule violations.
 */
var ValidationContext = (function () {
    /**
     * The constructor for the base validation context.
     */
    function ValidationContext() {
        this.state = index_1.ValidationContextState.NotEvaluated;
        this.results = new Array();
        this.rules = new Array();
        console.log('The [ValidationContext] is ready for action(s). All things are good until broken...');
    }
    /**
     * Use this method to add a new rule to the ValidationContext.
     */
    ValidationContext.prototype.addRule = function (rule) {
        if (this.source) {
            rule.source = this.source;
        }
        this.rules.push(rule);
        return this;
    };
    /**
     * Use this extension method to set the [Source] for the current validation context.
     * @param source
     */
    ValidationContext.prototype.withSource = function (source) {
        this.source = source;
        return this;
    };
    /**
     * Use this method to execute the rules added to the [ValidationContext].
     */
    ValidationContext.prototype.renderRules = function () {
        var _this = this;
        this.results = new Array();
        if (this.rules && this.rules.length < 1) {
            return this;
        }
        this.rules.sort(function (r) { return r.priority; }).forEach(function (r) { return _this.results.push(r.execute()); });
        return this;
    };
    /**
     * Use to determine if the validation context has any rule violations.
     */
    ValidationContext.prototype.hasRuleViolations = function () {
        var hasViolations = false;
        if (this.rules) {
            var ruleViolationsCount = this.rules && this.rules.filter(function (r) { return r.isValid === false; }).length;
            if (ruleViolationsCount > 0) {
                hasViolations = true;
            }
        }
        return hasViolations;
    };
    Object.defineProperty(ValidationContext.prototype, "isValid", {
        /**
         * *Use to indicate if the validation context is valid - no rule violations.
         * @returns {}: returns a boolean.
         */
        get: function () {
            var isRuleValid = true;
            if (this.rules) {
                var invalidRulesCount = this.rules.filter(function (r) { return r.isValid === false; }).length;
                if (invalidRulesCount > 0) {
                    isRuleValid = false;
                }
            }
            return isRuleValid;
        },
        enumerable: true,
        configurable: true
    });
    return ValidationContext;
}());
exports.ValidationContext = ValidationContext;
//# sourceMappingURL=/validation/ValidationContext.js.map