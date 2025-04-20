import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { memo } from 'react';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var Emoji = /*#__PURE__*/memo(function (_ref) {
  var emoji = _ref.emoji,
    className = _ref.className,
    style = _ref.style,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 40 : _ref$size;
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsx("div", {
    className: cx(styles.container, className),
    style: _objectSpread({
      fontSize: size * 0.9,
      height: size,
      width: size
    }, style),
    children: emoji
  });
});
export default Emoji;