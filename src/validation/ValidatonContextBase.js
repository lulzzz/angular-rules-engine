"use strict";
var index_1 = require('./index');
var ValidatonContextBase = (function () {
    function ValidatonContextBase() {
        this.state = index_1.ValidationContextState.NotEvaluated;
        this.results = new Array();
        this.rules = new Array();
    }
    /**
     * Use this method to add a new rule to the ValidationContext.
     */
    ValidatonContextBase.prototype.addRule = function (rule) {
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
    ValidatonContextBase.prototype.withSource = function (source) {
        this.source = source;
        return this;
    };
    /**
     * Use this method to execute the rules added to the [ValidationContext].
     */
    ValidatonContextBase.prototype.renderRules = function () {
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
    ValidatonContextBase.prototype.hasRuleViolations = function () {
        var hasViolations = false;
        if (this.rules && this.rules.filter(function (r) { return r.isValid === false; })) {
            hasViolations = true;
        }
        return hasViolations;
    };
    Object.defineProperty(ValidatonContextBase.prototype, "isValid", {
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
    return ValidatonContextBase;
}());
exports.ValidatonContextBase = ValidatonContextBase;
