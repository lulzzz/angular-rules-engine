"use strict";
/**
 * Use to indicate the type for the [ServiceMessage].
 */
var MessageType;
(function (MessageType) {
    /**
     * Use to indicate the message type is informational.
     */
    MessageType[MessageType["Information"] = 1] = "Information";
    /**
     * Use to indicate the message type is warning.
     */
    MessageType[MessageType["Warning"] = 2] = "Warning";
    /**
     * Use to indicate the message type is error.
     */
    MessageType[MessageType["Error"] = 3] = "Error";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
//# sourceMappingURL=/service/MessageType.js.map