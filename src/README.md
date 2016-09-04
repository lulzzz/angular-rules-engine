
# Angular Rules Engine
The Angular Rules Engine is a JavaScript based rule engine that allows applications to contain simple or sophisticated business rule implementations as well as data validation.

#Motivation
A core principle of software design is Separation of Concerns (SOR). Business rules and validation are an integral part of most business applications. There are rules and validations that must occur during processing of business logic. Most applications will combine the business logic with rules and data validation - when this happens, testing and maintaining applications becomes more difficult.

A business rule engine allows the application to have a good Separation of Concerns (SOR). The Angular Rule Engine allows you to:

+ Use out-of-the-box rules that are already implemented.
+ Create custom rules that are either simple or composite.
+ Create rules that can be reused throughout the application. Code reuse eliminates copy/paste of common rules.
+ Use a single ValidationContext to add rules, execute rules, and evaluate the rule results. 
+ Use a consistent pattern and mechanism to implement your business rules and data validation.+ 

##ValidationContext
##Adding Rules to the ValidationContext
##Executing Rules
##Evaluation Rule Results
##RulePolicy
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
