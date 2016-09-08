import {SimpleRule} from './Index';
import {RuleResult} from './Index';

export class IsTrue extends SimpleRule {
    target: boolean;

    constructor(name: string, message: string, target: boolean, isDisplayable: boolean = true) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        this.isValid = true;
        if (this.target === false) {//if(not true)-->false;
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
