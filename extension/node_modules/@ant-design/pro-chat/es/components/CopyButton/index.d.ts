/// <reference types="react" />
import { type ActionIconSize } from "../../ActionIcon";
import { DivProps } from "../../types";
import { type TooltipProps } from 'antd';
export interface CopyButtonProps extends DivProps {
    /**
     * @description Additional class name
     */
    className?: string;
    /**
     * @description The text content to be copied
     */
    content: string;
    /**
     * @description The placement of the tooltip
     * @enum ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']
     * @default 'right'
     */
    placement?: TooltipProps['placement'];
    /**
     * @description The size of the icon
     * @enum ['large', 'normal', 'small', 'site']
     * @default 'site'
     */
    size?: ActionIconSize;
}
declare const CopyButton: import("react").NamedExoticComponent<CopyButtonProps>;
export default CopyButton;
