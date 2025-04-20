import { ChatMessage } from "../../../types/message";
import type { ChatStore } from '../store';
export declare const currentChats: (s: ChatStore) => ChatMessage[];
export declare const currentChatsWithGuideMessage: (s: ChatStore) => ChatMessage[];
export declare const currentChatsWithHistoryConfig: (s: ChatStore) => ChatMessage[];
export declare const chatsMessageString: (s: ChatStore) => string;
