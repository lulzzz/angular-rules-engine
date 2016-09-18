"use strict";
/**
 * Use this enumeration to determine the state of the Validation Context.
 */
(function (ValidationContextState) {
    ValidationContextState[ValidationContextState["NotEvaluated"] = 0] = "NotEvaluated";
    ValidationContextState[ValidationContextState["Success"] = 1] = "Success";
    ValidationContextState[ValidationContextState["Failure"] = 2] = "Failure";
})(exports.ValidationContextState || (exports.ValidationContextState = {}));
var ValidationContextState = exports.ValidationContextState;
//# sourceMappingURL=/validation/ValidationContextState.js.map