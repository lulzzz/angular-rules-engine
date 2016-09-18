import { MessageType } from './index';
/**
 * Use this class to create a message for the current [ServiceContext].
 */
export declare class ServiceMessage {
    Name: string;
    Message: string;
    MessageType: MessageType;
    Source: string;
    DisplayToUser: boolean;
    /**
     * The constructor for the [ServiceMessage].
     * @param name: The name of the message.
     * @param message: The display text of the message.
     * @param messageType: Indicates the type of message.
     * @param source: Indicates the source of the message.
     * @param displayToUser: Indicates if the message is displayable.
     */
    constructor(name: string, message?: string);
    constructor(name: string, message: string, messageType?: MessageType);
    constructor(name: string, message: string, messageType?: MessageType, source?: string);
    /**
     * Use this extension method to add the name of the message.
     * @param name: The name of the service message.
     */
    WithName(name: string): this;
    /**
     * Use this extension method to add the message text to the ServiceMessage item.
     * @param message: The display text of the service message.
     */
    WithMessage(message: string): this;
    /**
     * Use this extension method to set the [MessageType] of the ServiceMessage item.
     * @param messageType: Use to indicate the message type.
     */
    WithMessageType(messageType: MessageType): this;
    /**
     * Use this extension method to set the [Source] of the ServiceMessage item.
     * @param source: Use to indicate the source of the message.
     */
    WithSource(source: string): this;
    /**
     * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
     * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
     */
    WithDisplayToUser(displayToUser: boolean): this;
    /**
     * Use this method return a string representing the ServiceMessage.
     */
    toString(): string;
}
