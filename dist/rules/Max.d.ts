import { SimpleRule } from './index';
import { Primitive } from './index';
/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
export declare class Max extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
