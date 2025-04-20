/// <reference types="react" />
import { type InputNumberProps } from 'antd';
import { SliderSingleProps } from 'antd/es/slider';
export interface SliderWithInputProps extends SliderSingleProps {
    controls?: InputNumberProps['controls'];
    size?: InputNumberProps['size'];
}
declare const SliderWithInput: import("react").NamedExoticComponent<SliderWithInputProps>;
export default SliderWithInput;
