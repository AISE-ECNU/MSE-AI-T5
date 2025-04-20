/// <reference types="react" />
import { type IconProps } from "../Icon";
import { DivProps } from "../types";
import { type TooltipProps } from 'antd';
export type ActionIconSize = 'large' | 'normal' | 'small' | 'site' | {
    blockSize?: number;
    borderRadius?: number;
    fontSize?: number;
    strokeWidth?: number;
};
export interface ActionIconProps extends DivProps {
    /**
     * @description Whether the icon is active or not
     * @default false
     */
    active?: boolean;
    /**
     * @description Change arrow's visible state and change whether the arrow is pointed at the center of target.
     * @default false
     */
    arrow?: boolean;
    color?: IconProps['color'];
    fill?: IconProps['fill'];
    /**
     * @description Glass blur style
     * @default 'false'
     */
    glass?: boolean;
    /**
     * @description The icon element to be rendered
     * @type LucideIcon
     */
    icon?: IconProps['icon'];
    /**
     * @description Set the loading status of ActionIcon
     */
    loading?: boolean;
    /**
     * @description The position of the tooltip relative to the target
     * @enum ["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]
     * @default "top"
     */
    placement?: TooltipProps['placement'];
    /**
     * @description Size of the icon
     * @default 'normal'
     */
    size?: ActionIconSize;
    /**
     * @description Whether add spotlight background
     * @default false
     */
    spotlight?: boolean;
    /**
     * @description The text shown in the tooltip
     */
    title?: string;
    /**
     * @description Mouse enter delay of tooltip
     * @default 0.5
     */
    tooltipDelay?: number;
}
declare const ActionIcon: import("react").ForwardRefExoticComponent<ActionIconProps & import("react").RefAttributes<HTMLDivElement>>;
export default ActionIcon;
