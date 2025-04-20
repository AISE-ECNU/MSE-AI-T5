import { ProChatChatReference } from "./StoreUpdater";
import { ReactNode } from 'react';
import { DevtoolsOptions } from 'zustand/middleware';
import { ChatProps } from '../store';
interface ProChatProviderProps<T extends Record<string, any> = Record<string, any>> extends ChatProps<T> {
    children: ReactNode;
    devtoolOptions?: boolean | DevtoolsOptions;
    chatRef?: ProChatChatReference;
}
export declare const ProChatProvider: import("react").NamedExoticComponent<ProChatProviderProps<any>>;
export {};
