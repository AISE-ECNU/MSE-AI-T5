import { ReactNode } from 'react';
import { DivProps } from "../../../types";
export interface FormTitleProps extends DivProps {
    avatar?: ReactNode;
    desc?: ReactNode;
    tag?: string;
    title: string;
}
declare const FormTitle: import("react").NamedExoticComponent<FormTitleProps>;
export default FormTitle;
