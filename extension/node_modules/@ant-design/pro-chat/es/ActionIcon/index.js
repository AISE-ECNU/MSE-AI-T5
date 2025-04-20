import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "fill", "className", "active", "icon", "size", "style", "glass", "spotlight", "onClick", "children", "loading", "title", "placement", "arrow", "tooltipDelay"];
import { Loader2 } from 'lucide-react';
import { forwardRef, useMemo } from 'react';
import Icon from "../Icon";
import Spotlight from "../components/Spotlight";
import { ActionIcon as ProEditorActionIcon } from '@ant-design/pro-editor';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var calcSize = function calcSize(size) {
  var blockSize;
  var borderRadius;
  switch (size) {
    case 'large':
      {
        blockSize = 44;
        borderRadius = 8;
        break;
      }
    case 'normal':
      {
        blockSize = 36;
        borderRadius = 5;
        break;
      }
    case 'small':
      {
        blockSize = 24;
        borderRadius = 5;
        break;
      }
    case 'site':
      {
        blockSize = 34;
        borderRadius = 5;
        break;
      }
    default:
      {
        blockSize = (size === null || size === void 0 ? void 0 : size.blockSize) || 36;
        borderRadius = (size === null || size === void 0 ? void 0 : size.borderRadius) || 5;
        break;
      }
  }
  return {
    blockSize: blockSize,
    borderRadius: borderRadius
  };
};
var ActionIcon = /*#__PURE__*/forwardRef(function (props, ref) {
  var color = props.color,
    fill = props.fill,
    className = props.className,
    active = props.active,
    icon = props.icon,
    _props$size = props.size,
    size = _props$size === void 0 ? 'normal' : _props$size,
    style = props.style,
    glass = props.glass,
    spotlight = props.spotlight,
    onClick = props.onClick,
    children = props.children,
    loading = props.loading,
    title = props.title,
    placement = props.placement,
    _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    _props$tooltipDelay = props.tooltipDelay,
    tooltipDelay = _props$tooltipDelay === void 0 ? 0.5 : _props$tooltipDelay,
    rest = _objectWithoutProperties(props, _excluded);
  var _useStyles = useStyles({
      active: Boolean(active),
      glass: Boolean(glass)
    }),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var _useMemo = useMemo(function () {
      return calcSize(size);
    }, [size]),
    blockSize = _useMemo.blockSize,
    borderRadius = _useMemo.borderRadius;
  var content = /*#__PURE__*/_jsxs(_Fragment, {
    children: [icon && /*#__PURE__*/_jsx(Icon, {
      color: color,
      fill: fill,
      icon: icon,
      size: size === 'site' ? 'normal' : size
    }), children]
  });
  var spin = /*#__PURE__*/_jsx(Icon, {
    color: color,
    icon: Loader2,
    size: size === 'site' ? 'normal' : size,
    spin: true
  });
  var actionIconBlock = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
    className: cx(styles.block, className),
    onClick: loading ? undefined : onClick,
    ref: ref,
    style: _objectSpread({
      borderRadius: borderRadius,
      height: blockSize,
      width: blockSize
    }, style)
  }, rest), {}, {
    children: [spotlight && /*#__PURE__*/_jsx(Spotlight, {}), loading ? spin : content]
  }));
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(ProEditorActionIcon, _objectSpread(_objectSpread({}, rest), {}, {
      arrow: arrow,
      tooltipDelay: tooltipDelay,
      placement: placement,
      title: title,
      icon: actionIconBlock,
      size: blockSize
    }))
  });
});
export default ActionIcon;