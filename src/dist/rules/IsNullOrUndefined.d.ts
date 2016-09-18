import { SimpleRule } from './index';
export declare class IsNullOrUndefined extends SimpleRule {
    target: any;
    constructor(name: string, message: string, target: any, isDisplayable?: boolean);
    render(): any;
}
