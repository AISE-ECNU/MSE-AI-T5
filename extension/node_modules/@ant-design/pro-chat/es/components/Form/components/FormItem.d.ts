/// <reference types="react" />
import { FormItemProps as AntdFormItemProps } from 'antd';
import { type FormTitleProps } from './FormTitle';
export interface FormItemProps extends AntdFormItemProps {
    avatar?: FormTitleProps['avatar'];
    desc?: FormTitleProps['desc'];
    divider?: boolean;
    hidden?: boolean;
    minWidth?: string | number;
    tag?: FormTitleProps['tag'];
}
declare const FormItem: import("react").NamedExoticComponent<FormItemProps>;
export default FormItem;
