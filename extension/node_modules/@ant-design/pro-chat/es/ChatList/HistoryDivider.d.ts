/// <reference types="react" />
/**
 * 历史记录分割线组件的属性。
 */
interface HistoryDividerProps {
    /**
     * 是否启用分割线。
     */
    enable?: boolean;
    /**
     * 分割线文本。
     */
    text?: string;
}
/**
 * 历史记录分割线组件。
 */
declare const HistoryDivider: import("react").NamedExoticComponent<HistoryDividerProps>;
export default HistoryDivider;
