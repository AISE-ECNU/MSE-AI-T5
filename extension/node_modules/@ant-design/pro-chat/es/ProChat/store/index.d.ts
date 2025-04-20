/// <reference types="react" />
import { StoreApi } from 'zustand';
import { ChatStore } from './store';
export type { ChatState } from './initialState';
export * from './store';
export declare const useStore: import("zustand-utils").UseContextStore<StoreApi<ChatStore>>, useStoreApi: () => {
    setState: (partial: ChatStore | Partial<ChatStore> | ((state: ChatStore) => ChatStore | Partial<ChatStore>), replace?: boolean) => void;
    getState: () => ChatStore;
    getInitialState: () => ChatStore;
    subscribe: (listener: (state: ChatStore, prevState: ChatStore) => void) => () => void;
    destroy: () => void;
}, Provider: ({ createStore, children }: {
    createStore: () => StoreApi<ChatStore>;
    children: import("react").ReactNode;
}) => import("react").FunctionComponentElement<import("react").ProviderProps<StoreApi<ChatStore>>>;
