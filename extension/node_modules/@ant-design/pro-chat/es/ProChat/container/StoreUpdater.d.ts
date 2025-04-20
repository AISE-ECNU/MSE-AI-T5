import { MutableRefObject } from 'react';
import { ProChatInstance } from '../hooks/useProChat';
import { ChatProps, ChatState } from '../store';
export type ProChatChatReference = MutableRefObject<ProChatInstance | undefined>;
export interface StoreUpdaterProps extends Partial<Pick<ChatState, 'chats' | 'config' | 'init' | 'onChatsChange' | 'helloMessage' | 'request' | 'locale' | 'inputAreaProps' | 'actions' | 'transformToChatMessage'>>, Pick<ChatProps, 'userMeta' | 'assistantMeta'> {
    chatRef?: ProChatChatReference;
}
declare const StoreUpdater: import("react").NamedExoticComponent<StoreUpdaterProps>;
export default StoreUpdater;
