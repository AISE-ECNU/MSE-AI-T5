import { CSSProperties } from 'react';
import { type MessageInputProps } from "../MessageInput";
import { type MessageModalProps } from "../MessageModal";
import { MarkdownProps } from '@ant-design/pro-editor';
export interface EditableMessageProps {
    /**
     * @title The class name for the Markdown and MessageInput component
     */
    classNames?: {
        /**
         * @title The class name for the MessageInput component
         */
        input?: string;
        textarea?: string;
    };
    editButtonSize?: MessageInputProps['editButtonSize'];
    /**
     * @title Whether the component is in edit mode or not
     * @default false
     */
    editing?: boolean;
    fullFeaturedCodeBlock?: boolean;
    height?: MessageInputProps['height'];
    inputType?: MessageInputProps['type'];
    model?: {
        extra?: MessageModalProps['extra'];
        footer?: MessageModalProps['footer'];
    };
    /**
     * @title Callback function when the value changes
     * @param value - The new value
     */
    onChange?: (value: string) => void;
    /**
     * @title Callback function when the editing state changes
     * @param editing - Whether the component is in edit mode or not
     */
    onEditingChange?: (editing: boolean) => void;
    /**
     * @title Callback function when the modal open state changes
     * @param open - Whether the modal is open or not
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * @title Whether the modal is open or not
     * @default false
     */
    openModal?: boolean;
    placeholder?: string;
    /**
     * @title Whether to show the edit button when the text value is empty
     * @default false
     */
    showEditWhenEmpty?: boolean;
    styles?: {
        /**
         * @title The style for the MessageInput component
         */
        input?: CSSProperties;
    };
    text?: MessageModalProps['text'];
    /**
     * @title The current text value
     */
    value: string;
    /**
     * @title The props for the Markdown component
     */
    markdownProps?: MarkdownProps;
}
declare const EditableMessage: import("react").NamedExoticComponent<EditableMessageProps>;
export default EditableMessage;
