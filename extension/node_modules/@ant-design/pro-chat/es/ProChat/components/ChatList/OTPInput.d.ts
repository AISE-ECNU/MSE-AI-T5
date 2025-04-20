import React from 'react';
/**
 * Let's borrow some props from HTML "input". More info below:
 *
 * [Pick Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
 *
 * [How to extend HTML Elements](https://reacthustle.com/blog/how-to-extend-html-elements-in-react-typescript)
 */
type PartialInputProps = Pick<React.ComponentPropsWithoutRef<'input'>, 'className' | 'style'>;
interface OtpInputProps extends PartialInputProps {
    onChange?: (value: string) => void;
    /**
     * Number of characters/input for this component
     */
    size?: number;
    /**
     * Validation pattern for each input.
     * e.g: /[0-9]{1}/ for digits only or /[0-9a-zA-Z]{1}/ for alphanumeric
     */
    validationPattern?: RegExp;
    /**
     * full value of the otp input, up to {size} characters
     */
    value?: string;
    defaultValue?: string;
}
declare const OtpInput: React.NamedExoticComponent<OtpInputProps>;
export default OtpInput;
