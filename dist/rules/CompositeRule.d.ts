import { RulePolicy } from './RulePolicy';
import { RuleResult } from './RuleResult';
export declare class CompositeRule extends RulePolicy {
    hasErrors: boolean;
    results: Array<RuleResult>;
    rules: Array<RulePolicy>;
    constructor(name: string, message: string);
    render(): RuleResult;
    hasRules(): boolean;
    processResults(): RuleResult;
}
