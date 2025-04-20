import { FormProps as AntFormProps, type FormInstance } from 'antd';
import { RefAttributes, type ReactNode } from 'react';
import FormGroup, { type FormGroupProps } from './components/FormGroup';
import FormItem, { type FormItemProps } from './components/FormItem';
export interface ItemGroup {
    children: FormItemProps[];
    extra?: FormGroupProps['extra'];
    icon?: FormGroupProps['icon'];
    title: FormGroupProps['title'];
}
export interface FormProps extends AntFormProps {
    children?: ReactNode;
    footer?: ReactNode;
    itemMinWidth?: FormItemProps['minWidth'];
    items?: ItemGroup[];
}
export interface IForm {
    (props: FormProps & RefAttributes<FormInstance>): ReactNode;
    Group: typeof FormGroup;
    Item: typeof FormItem;
}
declare const Form: IForm;
export default Form;
