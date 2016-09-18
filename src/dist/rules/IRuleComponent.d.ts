import { RuleResult } from './index';
export interface IRuleComponent {
    execute(): RuleResult;
}
