import dCompareResult = require('typescript-dotnet-commonjs/System/CompareResult');
import CompareResult = dCompareResult.CompareResult;
import dCompare = require('typescript-dotnet-commonjs/System/Compare');
import Compare = dCompare;

import {SimpleRule} from './Index';
import {RuleResult} from './Index';
import {Primitive} from './Index';

/**
 * Use the [Min] rule to determine if the target value is equal to or greater than the minimum
 * allowed value [comparison].
 */
export class Min extends SimpleRule {
    target: Primitive;
    comparison: Primitive;
    prima

    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }

    render() {
        let compareResult = Compare.compare(this.target, this.comparison, true);
        if(compareResult === CompareResult.Less){
            this.isValid = true;
        }
        return new RuleResult(this, this.target);
    }
}
