import { CompositeRule } from './index';
import { Primitive } from './index';
export declare class Range extends CompositeRule {
    end: number;
    start: number;
    target: Primitive;
    constructor(name: string, message: string, target: Primitive, start: number, end: number, isDisplayable?: boolean);
}
