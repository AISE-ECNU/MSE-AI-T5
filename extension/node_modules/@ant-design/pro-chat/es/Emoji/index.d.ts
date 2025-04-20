/// <reference types="react" />
import { DivProps } from '../types';
export interface EmojiProps extends DivProps {
    /**
     * @description The emoji character to be rendered
     */
    emoji: string;
    /**
     * @description Size of the emoji
     * @default 40
     */
    size?: number;
}
declare const Emoji: import("react").NamedExoticComponent<EmojiProps>;
export default Emoji;
