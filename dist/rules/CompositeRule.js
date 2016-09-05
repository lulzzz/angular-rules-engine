"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RulePolicy_1 = require('./RulePolicy');
var RuleResult_1 = require('./RuleResult');
var CompositeRule = (function (_super) {
    __extends(CompositeRule, _super);
    function CompositeRule(name, message) {
        _super.call(this, name, message, false);
        this.hasErrors = false;
        this.results = new Array();
        this.rules = new Array();
    }
    CompositeRule.prototype.render = function () {
        var _this = this;
        this.rules.sort(function (s) { return s.priority; }).forEach(function (r) { return _this.results.push(r.execute()); });
        return this.processResults();
    };
    CompositeRule.prototype.hasRules = function () {
        if (this.rules && this.rules.length > 0) {
            return true;
        }
        return false;
    };
    CompositeRule.prototype.processResults = function () {
        if (this.results.filter(function (r) { return (r.isValid === false); }).length > 0) {
            this.isValid = false;
            this.hasErrors = true;
        }
        return new RuleResult_1.RuleResult(this);
    };
    return CompositeRule;
}(RulePolicy_1.RulePolicy));
exports.CompositeRule = CompositeRule;
//# sourceMappingURL=CompositeRule.js.map