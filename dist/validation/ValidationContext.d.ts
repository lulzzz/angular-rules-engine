import { IValidationContext } from './index';
import { ValidationContextState } from './index';
import { RuleResult } from '../rules/index';
import { RulePolicy } from '../rules/index';
/**
 * Use this class to create a new Validation Context for your application. With this
 * context, you can add rules and evaluate the rules.
 *
 * After the rules are evaluated, you can use the Validation Context to determine if there are
 * any rule violations.
 */
export declare class ValidationContext implements IValidationContext {
    state: ValidationContextState;
    results: Array<RuleResult>;
    rules: Array<RulePolicy>;
    source: string;
    /**
     * The constructor for the base validation context.
     */
    constructor();
    /**
     * Use this method to add a new rule to the ValidationContext.
     */
    addRule(rule: RulePolicy): this;
    /**
     * Use this extension method to set the [Source] for the current validation context.
     * @param source
     */
    withSource(source: string): this;
    /**
     * Use this method to execute the rules added to the [ValidationContext].
     */
    renderRules(): this;
    /**
     * Use to determine if the validation context has any rule violations.
     */
    hasRuleViolations(): boolean;
    /**
     * *Use to indicate if the validation context is valid - no rule violations.
     * @returns {}: returns a boolean.
     */
    readonly isValid: boolean;
}
