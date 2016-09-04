
# Angular Rules Engine
The Angular Rules Engine is a JavaScript based rule engine that allows applications to contain simple or sophisticated business rule implementations as well as data validation.

#Motivation
Two cores principles of goodd software design is [Separation of Concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns) and [Single Responsibility Principle(https://en.wikipedia.org/wiki/Single_responsibility_principle). Business rules and validation are an integral part of most business applications. There are rules and validations that must occur during processing of business logic. Most applications will combine the business logic with rules and data validation - when this happens, testing and maintaining applications becomes more difficult.

A business rule engine allows the application to have a good Separation of Concerns (SOR). The Angular Rule Engine allows you to:

+ Use out-of-the-box rules that are already implemented.
+ Create custom rules that are either simple or composite.
+ Create rules that can be reused throughout the application. Code reuse eliminates copy/paste of common rules.
+ Use a single ValidationContext to add rules, execute rules, and evaluate the rule results. 
+ Use a consistent pattern and mechanism to implement your business rules and data validation.+ 

##ValidationContext
The ValidationContext is the container object for rules. It allows the developer to add, execute and retrieve the results of the evaluated rules. 

+ Add rules by calling the [addRule()] function. 
+ Execute rules by calling the [renderRules()] function.
+ Retrieve the results (a list of RuleResult items) using the [results] public property.

```js
export class ValidatonContextBase implements IValidationContext {
	state: ValidationContextState = ValidationContextState.NotEvaluated;
	results: Array<RuleResult> = new Array<RuleResult>();
  rules: Array<RulePolicy> = new Array<RulePolicy>();
  source: string;

	/**
	 * Use this method to add a new rule to the ValidationContext. 
	 */
    addRule(rule: RulePolicy) {
        if (this.source) {
            rule.source = this.source;
        }
        this.rules.push(rule);
		return this;
	}

  
  /**
   * Use this method to execute the rules added to the [ValidationContext].
  */
    renderRules(): ValidatonContextBase {
		this.results = new Array<RuleResult>();
		if (this.rules && this.rules.length < 1) {
			return this;
		}
		this.rules.sort(r => r.priority).forEach(r => this.results.push(r.execute()));
		return this;
	}

  /**
   * Use to determin if the validation context has any rule violations.
   */
	hasRuleViolations(): boolean {
		var hasViolations = false;
		if (this.rules && this.rules.filter(r => r.isValid === false)) {
			hasViolations = true;
		}
		return hasViolations;
	}

    /**
     * *Use to indicate if the validation context is valid - no rule violations.
     * @returns {}: returns a boolean.
     */
	get isValid(): boolean {
		var isRuleValid: boolean = true;
		if (this.rules) {
			var invalidRulesCount = this.rules.filter(r => r.isValid === false).length;
			if (invalidRulesCount > 0) {
				isRuleValid = false;
			}
		}
		return isRuleValid;
	}
}
  
```

##Adding Rules to the ValidationContext
Using an initialzied [ValidationContext] object, you can add rules using a Fluent API syntax. The following example uses existing rules. 

A rule requires:
+Name: the name of the rule.
+Message: the text to display if the rule fails.

```js
  this._validationContext
      .withSource(this.actionName)
      .addRule(new rules.AreEqual('ThingsAreEqual', 'The things are not equal.', 'this', 'that', false))
      .addRule(new rules.IsTrue('ThisIsTrue', 'This is not true', this.isDone, true))
      .addRule(new rules.IsTrue('Really?', 'Is it really true?', false))
      .addRule(new rules.StringIsNotNullEmptyRange('StringIsGood', 'The string is not valid.', 'Hi', 3, 10));
```

##Executing Rules
##Evaluation Rule Results
##RulePolicy
The [RulePolicy] is the base class for all rule types. The angular-rules-engine contains (2) types of rule implmentations. Simple and Composite. These rule types form the basis of the rule engine. The rule engine uses the Composite Design Pattern.

+ isValid: 
+ message: 
+ name:
+ priority:
+ result: 
+ isDisplayable:
+ renderType: 
+ severity: 
+ source: 

```js
export class RulePolicy implements IRuleComponent {
    isValid: boolean = true;
    message: string;
    name: string;
    priority: number;
    result: RuleResult;
    isDisplayable: boolean;
    renderType: RenderType = RenderType.EvaluateAllRules;
    severity: Severity = Severity.Exception;
    source: string;

    constructor(name: string, message: string, isDisplayable: boolean);
    constructor(name: string, message: string, isDisplayable: boolean = false, severity: Severity = Severity.Exception, priority: number = 0) {
        this.name = name;
        this.message = message;
        this.isDisplayable = isDisplayable;
        this.priority = priority;
        this.severity = severity;
    }

    execute(): RuleResult {
        console.log('Begin execution of RulePolicy: ' + this.name);
        return this.render();
    }

    /**
     * Each rule must implement this function and return a valid [RuleResult].
     */
    render(): RuleResult {
        throw new Error('Each concreate rule must implement this function and return a valid Result.');
    }
}
```
##IRuleComponent
asdf

```js
export interface IRuleComponent {
    execute(): RuleResult;
}
```
##RuleResult
##Simple Rules
##Composite Rules

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.10.

The project has a dependency on: "typescript-dotnet-commonjs": "3.2.4",

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
