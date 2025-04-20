import { type BackTopProps } from 'antd';
import { MouseEventHandler, type CSSProperties } from 'react';
export interface BackBottomProps {
    className?: string;
    /**
     * @description
     * 点击的回调
     */
    onClick?: BackTopProps['onClick'];
    style?: CSSProperties;
    target: React.RefObject<HTMLDivElement>;
    text?: string;
    visibilityHeight?: BackTopProps['visibilityHeight'];
    /**
     * @description 自定义渲染 dom
     * @param defaultDom
     * @param scrollToBottom
     * @param BackBottomConfig
     * @returns  React.ReactNode
     */
    render?: (defaultDom: React.ReactNode, scrollToBottom: MouseEventHandler<HTMLDivElement>, BackBottomConfig: BackBottomProps) => React.ReactNode;
    /**
     * @description
     * 是否一直显示
     */
    alwaysShow?: boolean;
    onScroll?: (event: Event) => void;
}
declare const BackBottom: (props: BackBottomProps) => string | number | boolean | Iterable<import("react").ReactNode> | import("react/jsx-runtime").JSX.Element;
export default BackBottom;
