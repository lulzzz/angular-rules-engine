"use strict";
var RuleResult = (function () {
    function RuleResult(rulePolicy, target) {
        this.isValid = false;
        if (rulePolicy != null) {
            this.rulePolicy = rulePolicy;
            this.isValid = rulePolicy.isValid;
            this.message = rulePolicy.message;
        }
        this.target = target;
    }
    return RuleResult;
}());
exports.RuleResult = RuleResult;
//# sourceMappingURL=/rules/RuleResult.js.map