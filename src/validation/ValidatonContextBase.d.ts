import { IValidationContext } from './index';
import { ValidationContextState } from './index';
import { RuleResult } from '../rules/index';
import { RulePolicy } from '../rules/index';
export declare class ValidatonContextBase implements IValidationContext {
    state: ValidationContextState;
    results: Array<RuleResult>;
    rules: Array<RulePolicy>;
    source: string;
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
    renderRules(): ValidatonContextBase;
    /**
     * Use to determine if the validation context has any rule violations.
     */
    hasRuleViolations(): boolean;
    /**
     * *Use to indicate if the validation context is valid - no rule violations.
     * @returns {}: returns a boolean.
     */
    isValid: boolean;
}
