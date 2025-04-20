import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import { memo } from 'react';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var FormFooter = /*#__PURE__*/memo(function (_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: cx(styles.footer, className)
  }, props), {}, {
    children: children
  }));
});
export default FormFooter;