import { SimpleRule } from './index';
export declare class IsNotNullOrUndefined extends SimpleRule {
    target: any;
    constructor(name: string, message: string, target: any, isDisplayable?: boolean);
    /**
     * If the target is null or undefined, the result will be false.
     */
    render(): any;
}
