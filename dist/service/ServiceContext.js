"use strict";
var Index_1 = require('./Index');
/**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
var ServiceContext = (function () {
    function ServiceContext() {
        /**
         * A list of service messages added by the application during the processing of the
         * specified service request.
         */
        this.Messages = new Array();
        this.ErrorMessages = new Array();
    }
    /**
     * Use this method to add a new message to the [ServiceContext].
     */
    ServiceContext.prototype.addMessage = function (message) {
        this.Messages.push(message);
    };
    /**
     * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
     */
    ServiceContext.prototype.hasErrors = function () {
        if (this.Messages && this.Messages.length > 0) {
            this.ErrorMessages = this.Messages.filter(function (f) { return f.MessageType === Index_1.MessageType.Error; });
            if (this.ErrorMessages.length > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * Use to determine if the current [ServiceContext] does not contain any errors.
     */
    ServiceContext.prototype.isGood = function () {
        if (this.Messages && this.Messages.length > 0) {
            this.ErrorMessages = this.Messages.filter(function (f) { return f.MessageType === Index_1.MessageType.Error; });
            if (this.ErrorMessages.length > 0) {
                return false;
            }
        }
        return true;
    };
    return ServiceContext;
}());
exports.ServiceContext = ServiceContext;
//# sourceMappingURL=ServiceContext.js.map