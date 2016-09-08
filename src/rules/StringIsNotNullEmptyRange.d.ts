import { CompositeRule } from './Index';
import { Primitive } from './Index';
/**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maxiumum length.
 */
export declare class StringIsNotNullEmptyRange extends CompositeRule {
    maxLength: number;
    minLength: number;
    target: Primitive;
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rule(s) will be evaluated against.
     * @param minLength: The minimum allowed length of the target value.
     * @param maxLength: The maximum allowed length of the target value.
     */
    constructor(name: string, message: string, target: Primitive, minLength: number, maxLength: number, isDisplayable?: boolean);
    /**
     * A helper method to configure/add rules to the validation context.
     */
    configureRules(): void;
}
