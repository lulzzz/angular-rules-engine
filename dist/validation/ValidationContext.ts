import {ValidatonContextBase} from './Index';

/**
 * Use this class to create a new Validation Context for your application. With this
 * context, you can add rules and evaluate the rules.
 *
 * After the rules are evaluated, you can use the Validation Context to determine if there are
 * any rule violations. 
 */
export class ValidationContext extends ValidatonContextBase {
	constructor() { super(); }
}