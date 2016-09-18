"use strict";
var index_1 = require('../validation/index');
var index_2 = require('../validation/index');
var index_3 = require('./index');
/**
 * This is the framework Action class that provides the pipeline of pre/post
 * execution methods. This class implements the [Template Method] pattern.
 *
 * The pre-execute functions that can be implemented are:
 *		1. start();
 *		2. audit();
 *		3. preValidateAction();
 *		4. evaluateRules();
 *		5. postValidateAction();
 *		6. preExecuteAction();
 *
 *If the status of action is good, the business logic will be executed using the:
 *		1. processAction();
 *
 * The post-execution functions that can be implemented are:
 *		1. postExecuteAction();
 *		2. validateActionResult();
 *		3. finish();
 */
var Action = (function () {
    function Action() {
        this.allowExecution = true;
        this._validationContext = new index_1.ValidationContext();
        this.actionResult = index_3.ActionResult.Unknown;
    }
    Object.defineProperty(Action.prototype, "validationContext", {
        get: function () {
            return this._validationContext;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Use this method to execute a concrete action. A concrete action must implement
     * the [processAction] and the [validateActionResult] functions to be a valid
     * action.
     */
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
    /**
     * All action must implement this function. This is where your
     * [business logic] should be implemented. This function is called if
     * there are no validation rule exceptions.
     */
    Action.prototype.performAction = function () {
        throw new Error('Not implemented. Requires implementation in concrete action.');
    };
    /**
     * Override/Implement this function to perform an early operation in the action pipeline.
     * This function belongs to the pre-execute functions of the action pipeline.
     */
    Action.prototype.start = function () {
        console.log('Starting action.');
    };
    /**
     * Implement this function to perform any auditing features during the pre-exectuion of the
     * business logic.
     */
    Action.prototype.audit = function () {
        console.log('Auditing action.');
    };
    /**
     * Use this function to setup any validation rules before the validation happens. This
     * function is called before [evaluateRules].
     */
    Action.prototype.preValidateAction = function () {
        console.log('Pre-validating action.');
    };
    /**
     * Use this function to implement the execution of the validation and business rules. This
     * function is called after [preValidateAction].
     */
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
    /**
     * Use to determine or handle the results of the rule evalation. This
     * function is called after the [evaluateRules].
     */
    Action.prototype.postValidateAction = function () {
        console.log('Post-Validation of action.');
    };
    /**
     * Use this function to perform any setup before the action is executed.
     */
    Action.prototype.preExecuteAction = function () {
        console.log('Pre-execution of action.');
    };
    /**
     * Use this funciton to evaluate the action after the the business logic within
     * the [performAction] has executed.
     */
    Action.prototype.postExecuteAction = function () {
        console.log('Post-execution of action');
    };
    /**
     * This function requires implementation to determin the state and result of the action.
     * Use this opportunity to validate the results.
     */
    Action.prototype.validateActionResult = function () {
        throw new Error('Concrete actions required to implement this method.');
    };
    /**
     * Use this function to perform any cleanup, logging, or disposing of resources used
     * by the action. This is the last function called during the pipeline.
     */
    Action.prototype.finish = function () {
        console.log('Finish action.');
    };
    /**
     * Implement this function to perform validation of business rules and data.
     */
    Action.prototype.validateAction = function () {
        console.log('Validating the action.');
        return this.validationContext;
    };
    return Action;
}());
exports.Action = Action;
//# sourceMappingURL=/action/Action.js.map