import {SimpleRule} from './index';
import {RuleResult} from './index';

export class IsNullOrUndefined extends SimpleRule {
    target;

    constructor(name: string, message: string, target: any, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        if (this.target == null || typeof this.target === undefined || typeof this.target === "undefined") {
            this.isValid = true;
        }
        else{
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
