import dCompareResult = require('typescript-dotnet-commonjs/System/CompareResult');
import CompareResult = dCompareResult.CompareResult;
import dCompare = require('typescript-dotnet-commonjs/System/Compare');
import Compare = dCompare;

import {SimpleRule} from './index';
import {RuleResult} from './index';
import {Primitive} from './index';

export class AreEqual extends SimpleRule {
    target: Primitive;
    comparison: Primitive;

    /**
     * The constructor for the [AreEqualRule] rule.
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rules are evaluated against.
     * @param comparison: The comparison target the rules are evaluated against.
     */
    constructor(name: string, message: string, target: Primitive, comparison: Primitive, isDisplayable: boolean = true) {
    super(name, message, isDisplayable);
    this.target = target;
    this.comparison = comparison;
    }

    render() {
        if (Compare.compare(this.target, this.comparison, true) !== CompareResult.Equal) {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
