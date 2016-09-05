import { SimpleRule } from './Index';
import { Primitive } from './Index';
export declare class AreEqual extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    /**
     * The constructor for the [AreEqualRule] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param comparison: The comparison target the rules are evaluated against.
     */
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
