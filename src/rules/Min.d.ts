import { SimpleRule } from './Index';
import { Primitive } from './Index';
export declare class Min extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    prima: any;
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable?: boolean);
    render(): any;
}
