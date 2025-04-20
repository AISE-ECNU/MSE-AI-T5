import { FC, ReactNode } from 'react';
import { ActionEvent } from "../ActionIconGroup";
import { type ChatItemProps } from "../ChatItem";
import { LLMRoleType } from "../types/llm";
import { ChatMessage, ChatMessageError } from "../types/message";
import { MarkdownProps } from '@ant-design/pro-editor';
import { type ActionsBarProps } from './ActionsBar';
export type OnMessageChange = (id: string, content: string) => void;
export type OnActionClick = (action: ActionEvent, message: ChatMessage) => void;
export type RenderRole = LLMRoleType | 'default' | string;
export type RenderItem = FC<{
    key: string;
} & ChatMessage & ListItemProps>;
export type RenderMessage = FC<ChatMessage & {
    editableContent: ReactNode;
}>;
export type RenderMessageExtra = FC<ChatMessage>;
export type RenderErrorMessage = FC<ChatMessage>;
export type RenderAction = FC<ActionsBarProps & ChatMessage>;
/**
 * 聊天列表项的属性。
 * @template T 聊天列表项的额外数据类型。
 */
export interface ListItemProps<T = Record<string, any>> {
    /**
     * 聊天项的导航组件。
     */
    groupNav?: ChatItemProps['avatarAddon'];
    /**
     * 是否正在加载。
     */
    loading?: boolean;
    /**
     * 点击操作按钮的回调函数。
     */
    onActionsClick?: OnActionClick;
    /**
     * 消息变化的回调函数。
     */
    onMessageChange?: OnMessageChange;
    /**
     * 渲染操作按钮的函数。
     */
    renderActions?: {
        [actionKey: string]: RenderAction;
    };
    /**
     * 渲染错误消息的函数。
     */
    renderErrorMessages?: (data: ChatMessageError) => ReactNode;
    /**
     * 渲染列表项的函数。
     */
    renderItems?: {
        [role: RenderRole]: RenderItem;
    };
    /**
     * 渲染消息的函数。
     */
    renderMessages?: {
        [role: RenderRole]: RenderMessage;
    };
    /**
     * 渲染消息额外内容的函数。
     */
    renderMessagesExtra?: {
        [role: RenderRole]: RenderMessageExtra;
    };
    /**
     * 是否显示聊天项的名称。
     * @default false
     */
    showTitle?: boolean;
    /**
     * 文本内容。
     */
    text?: ChatItemProps['text'] & ActionsBarProps['text'] & {
        copySuccess?: string;
        history?: string;
    } & {
        [key: string]: string;
    };
    /**
     * 聊天列表的类型。
     * @default 'chat'
     */
    type?: 'docs' | 'chat';
    /**
     * 聊天项的类名。
     * @default ''
     */
    chatItemClassName?: string;
    /**
     * 聊天项的渲染函数。
     */
    chatItemRenderConfig?: ChatItemProps['chatItemRenderConfig'];
    /**
     * markdown组件的配置。
     */
    markdownProps?: MarkdownProps;
    /**
     * 原始数据。
     */
    originData?: ChatItemProps<T>['originData'];
}
/**
 * 聊天列表项的属性。
 * @template T 聊天列表项的额外数据类型。
 */
export type ChatListItemProps<T = Record<string, any>> = ChatMessage & ListItemProps<T>;
/**
 * 聊天列表项组件。
 * @param props 组件属性。
 * @returns 聊天列表项组件。
 */
declare const ChatListItem: (props: ChatListItemProps) => import("react/jsx-runtime").JSX.Element;
export default ChatListItem;
