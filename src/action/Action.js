"use strict";
var index_1 = require('../validation/index');
var index_2 = require('../validation/index');
var index_3 = require('./index');
var Action = (function () {
    function Action() {
        this.allowExecution = true;
        this.actionResult = index_3.ActionResult.Unknown;
        this._validationContext = new index_1.ValidationContext();
    }
    Object.defineProperty(Action.prototype, "validationContext", {
        get: function () {
            return this._validationContext;
        },
        enumerable: true,
        configurable: true
    });
    Action.prototype.execute = function () {
        console.log('Preparing to execute action.');
        this.processActionPipeline();
    };
    Action.prototype.processActionPipeline = function () {
        this.startAction();
        if (this.allowExecution) {
            this.processAction();
        }
        this.finishAction();
    };
    ;
    Action.prototype.startAction = function () {
        console.log('Starting action.');
        this.start();
        this.audit();
        this.preValidateAction();
        this.evaluateRules();
        this.postValidateAction();
        this.preExecuteAction();
    };
    Action.prototype.finishAction = function () {
        console.log('Finishing action.');
        this.postExecuteAction();
        this.validateActionResult();
        this.finish();
    };
    Action.prototype.processAction = function () {
        console.log('Processing action.');
        this.performAction();
    };
    Action.prototype.performAction = function () {
        throw new Error('Not implemented. Requires implementation in concrete action.');
    };
    Action.prototype.start = function () {
        console.log('Starting action.');
    };
    Action.prototype.audit = function () {
        console.log('Auditing action.');
    };
    Action.prototype.preValidateAction = function () {
        console.log('Pre-validating action.');
    };
    Action.prototype.evaluateRules = function () {
        console.log('Evaluating action rules.');
        var context = this.validateAction();
        if (context.isValid) {
            this.allowExecution = true;
            this.validationContext.state = index_2.ValidationContextState.Success;
        }
        else {
            this.allowExecution = false;
            this.validationContext.state = index_2.ValidationContextState.Failure;
        }
    };
    Action.prototype.postValidateAction = function () {
        console.log('Post-Validation of action.');
    };
    Action.prototype.preExecuteAction = function () {
        console.log('Pre-execution of action.');
    };
    Action.prototype.postExecuteAction = function () {
        console.log('Post-execution of action');
    };
    Action.prototype.validateActionResult = function () {
        throw new Error('Concrete actions required to implement this method.');
    };
    Action.prototype.finish = function () {
        console.log('Finish action.');
    };
    Action.prototype.validateAction = function () {
        console.log('Validating the action.');
        return this.validationContext;
    };
    return Action;
}());
exports.Action = Action;
