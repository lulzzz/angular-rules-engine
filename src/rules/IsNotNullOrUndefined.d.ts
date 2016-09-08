import { SimpleRule } from './Index';
export declare class IsNotNullOrUndefined extends SimpleRule {
    target: any;
    constructor(name: string, message: string, target: any, isDisplayable?: boolean);
    render(): any;
}
