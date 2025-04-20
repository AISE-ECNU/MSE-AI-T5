import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "displayMode", "maxValue", "value", "text", "shape"];
import { useResponsive } from 'antd-style';
import { forwardRef } from 'react';
import Emoji from "../Emoji";
import { ICON_SIZE, useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var TokenTag = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
    _ref$displayMode = _ref.displayMode,
    displayMode = _ref$displayMode === void 0 ? 'remained' : _ref$displayMode,
    maxValue = _ref.maxValue,
    value = _ref.value,
    text = _ref.text,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'round' : _ref$shape,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var valueLeft = maxValue - value;
  var percent = valueLeft / maxValue;
  var type;
  var emoji;
  if (percent > 0.3) {
    type = 'normal';
    emoji = '😀';
  } else if (percent > 0) {
    type = 'low';
    emoji = '😅';
  } else {
    type = 'overload';
    emoji = '🤯';
  }
  var _useStyles = useStyles({
      shape: shape,
      type: type
    }),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  return /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
    className: cx(styles.container, className),
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(Emoji, {
      emoji: emoji,
      size: ICON_SIZE
    }), valueLeft > 0 ? [mobile ? '' : displayMode === 'remained' ? (text === null || text === void 0 ? void 0 : text.remained) || 'Remained' : (text === null || text === void 0 ? void 0 : text.used) || 'Used', displayMode === 'remained' ? valueLeft : value].join(' ') : (text === null || text === void 0 ? void 0 : text.overload) || 'Overload']
  }));
});
export default TokenTag;