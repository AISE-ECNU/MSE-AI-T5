/// <reference types="react" />
import { ChatItemProps } from "..";
export interface ActionsProps {
    actions: ChatItemProps['actions'];
    className?: string;
}
declare const Actions: import("react").NamedExoticComponent<ActionsProps>;
export default Actions;
