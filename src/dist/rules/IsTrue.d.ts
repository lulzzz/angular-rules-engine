import { SimpleRule } from './index';
export declare class IsTrue extends SimpleRule {
    target: boolean;
    constructor(name: string, message: string, target: boolean, isDisplayable?: boolean);
    render(): any;
}
