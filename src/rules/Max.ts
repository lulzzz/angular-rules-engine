import dCompareResult = require('typescript-dotnet-commonjs/System/CompareResult');
import CompareResult = dCompareResult.CompareResult;
import dCompare = require('typescript-dotnet-commonjs/System/Compare');
import Compare = dCompare;

import {SimpleRule} from './Index'
import {RuleResult} from './Index'
import {Primitive} from './Index';

export class Max extends SimpleRule {
    target: Primitive;
    comparison: Primitive;

    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }

    render() {
        if (Compare.compare(this.target, this.comparison, true) === CompareResult.Greater) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
