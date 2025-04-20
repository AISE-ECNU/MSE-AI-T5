/// <reference types="react" />
import { LucideIcon } from 'lucide-react';
import { DivProps } from "../types";
export type IconSize = 'large' | 'normal' | 'small' | {
    fontSize?: number;
    strokeWidth?: number;
};
export interface IconProps extends DivProps {
    color?: string;
    fill?: string;
    /**
     * @description The icon element to be rendered
     * @type LucideIcon
     */
    icon: LucideIcon;
    /**
     * @description Size of the icon
     * @default 'normal'
     */
    size?: IconSize;
    /**
     * @description Rotate icon with animation
     * @default false
     */
    spin?: boolean;
}
declare const Icon: import("react").NamedExoticComponent<IconProps>;
export default Icon;
