import { LLMRoleType } from "../../../types/llm";
import { ChatMessage } from "../../../types/message";
import { MetaData } from "../../../types/meta";
interface AddMessage {
    id?: string;
    message: string;
    meta?: MetaData;
    parentId?: string;
    quotaId?: string;
    role: LLMRoleType;
    type: 'addMessage';
}
interface DeleteMessage {
    id: string;
    type: 'deleteMessage';
}
interface ResetMessages {
    topicId?: string;
    type: 'resetMessages';
}
interface UpdateMessage {
    id: string;
    key: keyof ChatMessage;
    type: 'updateMessage';
    value: ChatMessage[keyof ChatMessage];
}
interface UpdateMessageExtra {
    id: string;
    key: string;
    type: 'updateMessageExtra';
    value: any;
}
export type MessageDispatch = AddMessage | DeleteMessage | ResetMessages | UpdateMessage | UpdateMessageExtra;
export declare const messagesReducer: (state: ChatMessage<any>[], payload: MessageDispatch) => ChatMessage<any>[];
export {};
