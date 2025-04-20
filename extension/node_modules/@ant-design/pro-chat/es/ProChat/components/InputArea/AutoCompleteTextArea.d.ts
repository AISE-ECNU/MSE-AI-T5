import { AutoCompleteProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import React from 'react';
type AutoCompleteTextAreaProps = TextAreaProps & {
    autoCompleteProps?: AutoCompleteProps;
};
export declare const AutoCompleteTextArea: React.FC<AutoCompleteTextAreaProps>;
export {};
