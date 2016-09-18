import { RulePolicy } from './index';
import { CompositeRule } from './index';
export declare class RuleResult {
    isValid: boolean;
    rulePolicy: RulePolicy;
    message: string;
    target: any;
    constructor(rulePolicy: RulePolicy, target: any);
    constructor(rulePolicy: CompositeRule);
}
