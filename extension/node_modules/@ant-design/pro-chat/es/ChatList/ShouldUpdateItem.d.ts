import { Component } from 'react';
/**
 * 组件用于判断是否需要更新的辅助类。
 */
declare class ShouldUpdateItem extends Component<{
    shouldUpdate?: (prevProps: any, nextProps: any) => boolean;
    children: React.ReactNode;
    [key: string]: any;
}, any> {
    /**
     * 判断组件是否需要更新。
     * @param nextProps - 下一个属性对象。
     * @returns 如果需要更新则返回 true，否则返回 false。
     */
    shouldComponentUpdate(nextProps: any): any;
    render(): import("react").ReactNode;
}
export default ShouldUpdateItem;
