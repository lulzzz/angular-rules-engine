"use strict";
var RenderType_1 = require('./RenderType');
var Severity_1 = require('./Severity');
var RulePolicy = (function () {
    function RulePolicy(name, message, isDisplayable, severity, priority) {
        if (isDisplayable === void 0) { isDisplayable = false; }
        if (severity === void 0) { severity = Severity_1.Severity.Exception; }
        if (priority === void 0) { priority = 0; }
        this.isValid = true;
        this.renderType = RenderType_1.RenderType.EvaluateAllRules;
        this.severity = Severity_1.Severity.Exception;
        this.name = name;
        this.message = message;
        this.isDisplayable = isDisplayable;
        this.priority = priority;
        this.severity = severity;
    }
    RulePolicy.prototype.execute = function () {
        console.log('Begin execution of RulePolicy: ' + this.name);
        return this.render();
    };
    /**
     * Each rule must implement this function and return a valid [RuleResult].
     */
    RulePolicy.prototype.render = function () {
        throw new Error('Each concreate rule must implement this function and return a valid Result.');
    };
    return RulePolicy;
}());
exports.RulePolicy = RulePolicy;
//# sourceMappingURL=/rules/RulePolicy.js.map