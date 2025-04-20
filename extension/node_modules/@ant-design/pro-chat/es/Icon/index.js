import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["icon", "size", "color", "fill", "className", "spin"];
import { memo, useMemo } from 'react';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var calcSize = function calcSize(size) {
  var fontSize;
  var strokeWidth;
  switch (size) {
    case 'large':
      {
        fontSize = 24;
        strokeWidth = 2;
        break;
      }
    case 'normal':
      {
        fontSize = 20;
        strokeWidth = 2;
        break;
      }
    case 'small':
      {
        fontSize = 14;
        strokeWidth = 1.5;
        break;
      }
    default:
      {
        if (size) {
          fontSize = (size === null || size === void 0 ? void 0 : size.fontSize) || 24;
          strokeWidth = (size === null || size === void 0 ? void 0 : size.strokeWidth) || 2;
        } else {
          fontSize = '1em';
          strokeWidth = 2;
        }
        break;
      }
  }
  return {
    fontSize: fontSize,
    strokeWidth: strokeWidth
  };
};
var Icon = /*#__PURE__*/memo(function (_ref) {
  var icon = _ref.icon,
    size = _ref.size,
    color = _ref.color,
    fill = _ref.fill,
    className = _ref.className,
    spin = _ref.spin,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var SvgIcon = icon;
  var _useMemo = useMemo(function () {
      return calcSize(size);
    }, [size]),
    fontSize = _useMemo.fontSize,
    strokeWidth = _useMemo.strokeWidth;
  return /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
    className: cx('anticon', spin && styles.spin, className),
    role: "img"
  }, props), {}, {
    children: /*#__PURE__*/_jsx(SvgIcon, {
      color: color,
      fill: fill !== null && fill !== void 0 ? fill : 'transparent',
      focusable: false,
      height: fontSize,
      size: fontSize,
      strokeWidth: strokeWidth,
      width: fontSize
    })
  }));
});
export default Icon;