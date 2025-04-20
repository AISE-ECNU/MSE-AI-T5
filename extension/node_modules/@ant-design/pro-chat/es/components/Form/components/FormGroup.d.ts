import { type IconProps } from "../../../Icon";
import { type CollapseProps } from 'antd';
import { type ReactNode } from 'react';
export interface FormGroupProps extends CollapseProps {
    children: ReactNode;
    extra?: ReactNode;
    icon?: IconProps['icon'];
    title: string;
}
declare const FormGroup: import("react").NamedExoticComponent<FormGroupProps>;
export default FormGroup;
