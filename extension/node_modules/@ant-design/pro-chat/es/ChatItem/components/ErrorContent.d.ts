/// <reference types="react" />
import { ChatItemProps } from "..";
export interface ErrorContentProps {
    message?: string;
    placement?: ChatItemProps['placement'];
}
declare const ErrorContent: import("react").NamedExoticComponent<ErrorContentProps>;
export default ErrorContent;
