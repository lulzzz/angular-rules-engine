import { ValidatonContextBase } from '../validation/index';
import { IAction } from './IAction';
import { ActionResult } from './index';
export declare class Action implements IAction {
    allowExecution: boolean;
    _validationContext: ValidatonContextBase;
    actionResult: ActionResult;
    constructor();
    validationContext: ValidatonContextBase;
    execute(): void;
    processActionPipeline(): void;
    startAction(): void;
    finishAction(): void;
    processAction(): void;
    performAction(): void;
    start(): void;
    audit(): void;
    preValidateAction(): void;
    evaluateRules(): void;
    postValidateAction(): void;
    preExecuteAction(): void;
    postExecuteAction(): void;
    validateActionResult(): ActionResult;
    finish(): void;
    validateAction(): ValidatonContextBase;
}
