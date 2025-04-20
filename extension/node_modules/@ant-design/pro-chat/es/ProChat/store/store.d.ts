import { ChatListProps } from "../../ChatList";
import { MetaData } from "../types/meta";
import { MarkdownProps } from '@ant-design/pro-editor';
import { DevtoolsOptions } from 'zustand/middleware';
import { ChatAction } from './action';
import { ChatPropsState, ChatState } from './initialState';
export interface ChatProps<T extends Record<string, any> = Record<string, any>> extends Partial<ChatPropsState<T>> {
    loading?: boolean;
    initialChats?: ChatPropsState<T>['chats'];
    userMeta?: MetaData;
    assistantMeta?: MetaData;
    /**
     * @description 聊天项的渲染函数
     */
    chatItemRenderConfig?: ChatListProps['chatItemRenderConfig'];
    /**
     * @description markdown组件的参数
     */
    markdownProps?: MarkdownProps;
    /**
     * @description 判断聊天项的更新函数
     */
    itemShouldUpdate?: ChatListProps['itemShouldUpdate'];
}
export type ChatStore = ChatAction & ChatState;
export declare const createStore: (props: ChatProps, options?: boolean | DevtoolsOptions) => import("zustand/traditional").UseBoundStoreWithEqualityFn<Omit<import("zustand/vanilla").StoreApi<ChatStore>, "setState"> & {
    setState<A extends string | {
        type: string;
    }>(partial: ChatStore | Partial<ChatStore> | ((state: ChatStore) => ChatStore | Partial<ChatStore>), replace?: boolean, action?: A): void;
}>;
