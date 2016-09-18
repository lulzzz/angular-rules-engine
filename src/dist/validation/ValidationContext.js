"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require('./index');
/**
 * Use this class to create a new Validation Context for your application. With this
 * context, you can add rules and evaluate the rules.
 *
 * After the rules are evaluated, you can use the Validation Context to determine if there are
 * any rule violations.
 */
var ValidationContext = (function (_super) {
    __extends(ValidationContext, _super);
    function ValidationContext() {
        _super.call(this);
    }
    return ValidationContext;
}(index_1.ValidatonContextBase));
exports.ValidationContext = ValidationContext;
//# sourceMappingURL=/validation/ValidationContext.js.map