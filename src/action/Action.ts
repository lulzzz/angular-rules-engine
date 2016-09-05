import {ValidationContext} from '../validation/index';
import {ValidatonContextBase} from '../validation/index';
import {ValidationContextState} from '../validation/index';
import {IAction} from './IAction';
import { ActionResult } from './index';

export class Action implements IAction {
    allowExecution = true;
    _validationContext: ValidatonContextBase;
    actionResult: ActionResult = ActionResult.Unknown;

    constructor() {
        this._validationContext = new ValidationContext();
    }

    get validationContext(): ValidatonContextBase {
        return this._validationContext;
    }

    execute() {
        console.log('Preparing to execute action.');
        this.processActionPipeline();
    }

    processActionPipeline() {
        this.startAction();
        if (this.allowExecution) {
            this.processAction();
        }
        this.finishAction();
    };

    startAction() {
        console.log('Starting action.');
        this.start();
        this.audit();
        this.preValidateAction();
        this.evaluateRules();
        this.postValidateAction();
        this.preExecuteAction();
    }

    finishAction() {
        console.log('Finishing action.');
        this.postExecuteAction();
        this.validateActionResult();
        this.finish();
    }

    processAction() {
        console.log('Processing action.');
        this.performAction();
    }

    performAction() {
        throw new Error('Not implemented. Requires implementation in concrete action.');
    }

    start() {
        console.log('Starting action.');
    }

    audit() {
        console.log('Auditing action.');
    }

    preValidateAction() {
        console.log('Pre-validating action.');
    }

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

    postValidateAction() {
        console.log('Post-Validation of action.');
    }

    preExecuteAction() {
        console.log('Pre-execution of action.');
    }

    postExecuteAction() {
        console.log('Post-execution of action');
    }

    validateActionResult(): ActionResult {
        throw new Error('Concrete actions required to implement this method.');
    }

    finish() {
        console.log('Finish action.');
    }

    validateAction() {
        console.log('Validating the action.');
        return this.validationContext;
    }
}
