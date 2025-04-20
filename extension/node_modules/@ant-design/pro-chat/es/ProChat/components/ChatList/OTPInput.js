import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _excluded = ["size", "validationPattern", "value", "defaultValue", "onChange", "className"];
var _templateObject;
import { createStyles } from 'antd-style';
import { useMergedState } from 'rc-util';
import React, { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n\n    font-size: 16px;\n    color: ", ";\n    text-align: center;\n\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 8px;\n\n    &:focus,\n    &:focus-visible {\n      border-color: ", ";\n      outline: none;\n    }\n  "])), token.controlHeight, token.controlHeight, token.colorText, token.colorBgContainer, token.colorBorder, token.colorPrimary);
});

/**
 * Let's borrow some props from HTML "input". More info below:
 *
 * [Pick Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
 *
 * [How to extend HTML Elements](https://reacthustle.com/blog/how-to-extend-html-elements-in-react-typescript)
 */

var handleKeyUp = function handleKeyUp(e) {
  var current = e.currentTarget;
  if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
    var prev = current.previousElementSibling;
    prev === null || prev === void 0 || prev.focus();
    prev === null || prev === void 0 || prev.setSelectionRange(0, 1);
    return;
  }
  if (e.key === 'ArrowRight') {
    var _prev = current.nextSibling;
    _prev === null || _prev === void 0 || _prev.focus();
    _prev === null || _prev === void 0 || _prev.setSelectionRange(0, 1);
    return;
  }
};
var OtpInput = /*#__PURE__*/memo(function (props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? 6 : _props$size,
    _props$validationPatt = props.validationPattern,
    validationPattern = _props$validationPatt === void 0 ? /\d/ : _props$validationPatt,
    outerValue = props.value,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    className = props.className,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useMergedState = useMergedState(defaultValue, {
      onChange: onChange,
      value: outerValue
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  // Create an array based on the size.
  var arr = Array.from({
    length: size
  }).fill('-');
  var handleInputChange = function handleInputChange(e, index) {
    var elem = e.target;
    var val = e.target.value;

    // check if the value is valid
    if (!validationPattern.test(val) && val !== '') return;

    // change the value using onChange props
    var valueArr = (value === null || value === void 0 ? void 0 : value.split('')) || [];
    valueArr[index] = val;
    var newVal = valueArr.join('').slice(0, 6);
    setValue(newVal);

    //focus the next element if there's a value
    if (val) {
      var next = elem.nextElementSibling;
      next === null || next === void 0 || next.focus();
    }
  };
  var handlePaste = function handlePaste(e) {
    e.preventDefault();
    var val = e.clipboardData.getData('text').slice(0, Math.max(0, size));
    setValue(val);
  };
  return /*#__PURE__*/_jsx(Flexbox, {
    gap: 12,
    horizontal: true,
    children: arr.map(function (_, index) {
      var _value$at;
      return /*#__PURE__*/_jsx("input", _objectSpread(_objectSpread({}, restProps), {}, {
        className: cx(styles, className),
        maxLength: 6,
        onChange: function onChange(e) {
          return handleInputChange(e, index);
        },
        onKeyUp: handleKeyUp,
        onPaste: handlePaste,
        pattern: validationPattern.source,
        type: "text",
        value: (_value$at = value === null || value === void 0 ? void 0 : value.at(index)) !== null && _value$at !== void 0 ? _value$at : ''
      }), index);
    })
  });
});
export default OtpInput;