
import {SimpleRule} from './Index'
import {RuleResult} from './Index'

export class IsTrue extends SimpleRule {
    target: boolean;

    constructor(name: string, message: string, target: boolean, isDisplayable: boolean = true) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        this.isValid = false;
        if (!this.target) {//if(not true)-->false;
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
