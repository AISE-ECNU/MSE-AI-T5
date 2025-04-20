import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "icon", "title", "children", "extra"];
import Icon from "../../../Icon";
import { Collapse } from 'antd';
import { useResponsive } from 'antd-style';
import { ChevronDown } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FormGroup = /*#__PURE__*/memo(function (_ref) {
  var className = _ref.className,
    icon = _ref.icon,
    title = _ref.title,
    children = _ref.children,
    extra = _ref.extra,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var titleContent = /*#__PURE__*/_jsxs("div", {
    className: styles.title,
    children: [icon && /*#__PURE__*/_jsx(Icon, {
      icon: icon
    }), title]
  });
  if (mobile) return /*#__PURE__*/_jsxs(Flexbox, {
    className: className,
    children: [/*#__PURE__*/_jsxs(Flexbox, {
      className: styles.mobileGroupHeader,
      horizontal: true,
      justify: 'space-between',
      children: [titleContent, extra]
    }), /*#__PURE__*/_jsx("div", {
      className: styles.mobileGroupBody,
      children: children
    })]
  });
  return /*#__PURE__*/_jsx(Collapse, _objectSpread({
    className: cx(styles.group, className),
    defaultActiveKey: [1],
    expandIcon: function expandIcon(_ref2) {
      var isActive = _ref2.isActive;
      return /*#__PURE__*/_jsx(Icon, {
        className: styles.icon,
        icon: ChevronDown,
        size: {
          fontSize: 16
        },
        style: isActive ? {} : {
          rotate: '-90deg'
        }
      });
    },
    items: [{
      children: children,
      extra: extra,
      key: 1,
      label: titleContent
    }]
  }, props), 1);
});
export default FormGroup;