import dCompareResult = require('typescript-dotnet-commonjs/System/CompareResult');
import CompareResult = dCompareResult.CompareResult;
import dCompare = require('typescript-dotnet-commonjs/System/Compare');
import Compare = dCompare;

import {CompositeRule} from './Index';
import {RuleResult} from './Index';
import {Primitive} from './Index';
import {IsNotNullOrUndefined} from './Index';
import {Min} from './Index';
import {Max} from './Index';

export class Range extends CompositeRule {
    end: number;
    start: number;
    target: Primitive;

    constructor(name: string, message: string, target: Primitive, start: number, end: number, isDisplayable: boolean = false) {
        super(name, message);
        this.target = target;
        this.start = start;
        this.end = end;
        this.isDisplayable = isDisplayable;

        this.rules.push(new IsNotNullOrUndefined('TargetIsNotNull', 'The target is null or undefined.', this.target));

        if (this.target != null) {
            this.rules.push(new Min('MinValue', 'The value must be equal to or greater than the start range value.', this.target, this.start));
            this.rules.push(new Max('MaxValue', 'The value must be equal to or less than the end range value.', this.target, this.end));
        }
    }
}
