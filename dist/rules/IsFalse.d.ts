import { SimpleRule } from './index';
export declare class IsFalse extends SimpleRule {
    target: boolean;
    constructor(name: string, message: string, target: boolean, isDisplayable?: boolean);
    render(): any;
}
