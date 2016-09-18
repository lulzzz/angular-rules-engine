import { SimpleRule } from './index';
import { Primitive } from './index';
/**
 * Use the [Min] rule to determine if the target value is equal to or greater than the minimum
 * allowed value [comparison].
 */
export declare class Min extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    prima: any;
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
