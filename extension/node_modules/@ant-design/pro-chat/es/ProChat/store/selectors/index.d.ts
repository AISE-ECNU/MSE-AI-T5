export declare const chatSelectors: {
    chatsMessageString: (s: import("..").ChatStore) => string;
    currentChats: (s: import("..").ChatStore) => import("../..").ChatMessage<Record<string, any>>[];
    currentChatsWithGuideMessage: (s: import("..").ChatStore) => import("../..").ChatMessage<Record<string, any>>[];
    currentChatsWithHistoryConfig: (s: import("..").ChatStore) => import("../..").ChatMessage<Record<string, any>>[];
};
