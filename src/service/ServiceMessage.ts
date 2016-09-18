import { MessageType } from './index';

/**
 * Use this class to create a message for the current [ServiceContext].
 */
export class ServiceMessage{

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
    constructor(name: string, message?: string)
    constructor(name: string, message: string, messageType?: MessageType)
    constructor(name: string, message: string, messageType?: MessageType, source?: string)
    constructor(name: string, message: string, messageType?: MessageType, source?: string, displayToUser?: boolean)
    {
        this.Name = name;
        this.Message = message;
        this.MessageType = messageType;
        this.Source = source;
        this.DisplayToUser = displayToUser;        
    }


    //constructor(name: string, message: string, messageType: MessageType, source?: string)
    //constructor(name: string, message: string, messageType: MessageType, source: string, displayToUser: boolean = false) {

    //}

    /**
     * Use this extension method to add the name of the message.
     * @param name: The name of the service message.
     */
    WithName(name: string) {
        this.Name = name;
        return this;
    }

    /**
     * Use this extension method to add the message text to the ServiceMessage item.
     * @param message: The display text of the service message.
     */
    WithMessage(message: string) {
        this.Message = message;
        return this;
    }

    /**
     * Use this extension method to set the [MessageType] of the ServiceMessage item.
     * @param messageType: Use to indicate the message type.
     */
    WithMessageType(messageType: MessageType) {
        this.MessageType = messageType;
        return this;
    }

    /**
     * Use this extension method to set the [Source] of the ServiceMessage item.
     * @param source: Use to indicate the source of the message.
     */
    WithSource(source: string) {
        this.Source = source;
        return this;
    }

    /**
     * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
     * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
     */
    WithDisplayToUser(displayToUser: boolean) {
        this.DisplayToUser = displayToUser;
        return this;
    }

    /**
     * Use this method return a string representing the ServiceMessage.
     */
    toString() {
        return `Name: ${this.Name}; Message: ${this.Message}; MessageType: ${this.MessageType.toString()}; Source: ${this.Source}; DisplayToUser: ${this.DisplayToUser}`;
    }
}