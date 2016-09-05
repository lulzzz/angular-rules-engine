import dCompareResult = require('typescript-dotnet-commonjs/System/CompareResult');
import CompareResult = dCompareResult.CompareResult;
import dCompare = require('typescript-dotnet-commonjs/System/Compare');
import Compare = dCompare;

import {SimpleRule} from './Index';
import {RuleResult} from './Index';
import {Primitive} from './Index';

export class AreNotEqual extends SimpleRule {
    target: Primitive;
    comparison: Primitive;

    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable: boolean = true) {
        super(name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }

    render() {
        if (Compare.compare(this.target, this.comparison, true) === CompareResult.Equal) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
