import {ValidationContext} from '../validation/index';
import {ValidationContextState} from '../validation/index';
import {IAction} from './IAction';
import { ActionResult } from './index';

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
export class Action implements IAction {
    allowExecution = true;
    _validationContext: ValidationContext = new ValidationContext();
    actionResult: ActionResult = ActionResult.Unknown;

    constructor() {}

    get validationContext(): ValidationContext {
        return this._validationContext;
    }

	/**
	 * Use this method to execute a concrete action. A concrete action must implement
	 * the [processAction] and the [validateActionResult] functions to be a valid
	 * action. 
	 */
    execute() {
        console.log('Preparing to execute action.');
        this.processActionPipeline();
    }

    private processActionPipeline() {
        this.startAction();
        if (this.allowExecution) {
            this.processAction();
        }
        this.finishAction();
    };

    private startAction() {
        console.log('Starting action.');
        this.start();
        this.audit();
        this.preValidateAction();
        this.evaluateRules();
        this.postValidateAction();
        this.preExecuteAction();
    }

    private finishAction() {
        console.log('Finishing action.');
        this.postExecuteAction();
        this.validateActionResult();
        this.finish();
    }

	
    private processAction() {
        console.log('Processing action.');
        this.performAction();
    }

	/**
	 * All action must implement this function. This is where your
	 * [business logic] should be implemented. This function is called if
	 * there are no validation rule exceptions.
	 */
    performAction() {
        throw new Error('Not implemented. Requires implementation in concrete action.');
    }

	/**
	 * Override/Implement this function to perform an early operation in the action pipeline.
	 * This function belongs to the pre-execute functions of the action pipeline.
	 */
    start() {
        console.log('Starting action.');
    }

	/**
	 * Implement this function to perform any auditing features during the pre-exectuion of the
	 * business logic.
	 */
    audit() {
        console.log('Auditing action.');
    }

	/**
	 * Use this function to setup any validation rules before the validation happens. This
	 * function is called before [evaluateRules].
	 */
    preValidateAction() {
        console.log('Pre-validating action.');
    }

	/**
	 * Use this function to implement the execution of the validation and business rules. This
	 * function is called after [preValidateAction].
	 */
    evaluateRules(){
        console.log('Evaluating action rules.');
        let context = this.validateAction();
        if (context.isValid) {
            this.allowExecution = true;
            this.validationContext.state = ValidationContextState.Success;
        } else {
            this.allowExecution = false;
            this.validationContext.state = ValidationContextState.Failure;
        }
    }

	/**
	 * Use to determine or handle the results of the rule evalation. This
	 * function is called after the [evaluateRules].
	 */
    postValidateAction() {
        console.log('Post-Validation of action.');
    }

	/**
	 * Use this function to perform any setup before the action is executed. 
	 */
    preExecuteAction() {
        console.log('Pre-execution of action.');
    }

	/**
	 * Use this funciton to evaluate the action after the the business logic within
	 * the [performAction] has executed.
	 */
    postExecuteAction() {
        console.log('Post-execution of action');
    }

	/**
	 * This function requires implementation to determin the state and result of the action.
	 * Use this opportunity to validate the results. 
	 */
    validateActionResult(): ActionResult {
        throw new Error('Concrete actions required to implement this method.');
    }

	/**
	 * Use this function to perform any cleanup, logging, or disposing of resources used
	 * by the action. This is the last function called during the pipeline.
	 */
    finish() {
        console.log('Finish action.');
    }

	/**
	 * Implement this function to perform validation of business rules and data.
	 */
    validateAction() {
        console.log('Validating the action.');
        return this.validationContext;
    }
}
