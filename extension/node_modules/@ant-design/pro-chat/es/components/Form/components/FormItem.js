import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["desc", "tag", "minWidth", "avatar", "className", "label", "children", "divider"];
import { Form } from 'antd';
import { memo } from 'react';
import FormDivider from "./FormDivider";
import FormTitle from "./FormTitle";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Item = Form.Item;
var FormItem = /*#__PURE__*/memo(function (_ref) {
  var desc = _ref.desc,
    tag = _ref.tag,
    minWidth = _ref.minWidth,
    avatar = _ref.avatar,
    className = _ref.className,
    label = _ref.label,
    children = _ref.children,
    divider = _ref.divider,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(minWidth),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [divider && /*#__PURE__*/_jsx(FormDivider, {}), /*#__PURE__*/_jsx(Item, _objectSpread(_objectSpread({
      className: cx(styles.item, !divider && styles.itemNoDivider, className),
      label: /*#__PURE__*/_jsx(FormTitle, {
        avatar: avatar,
        desc: desc,
        tag: tag,
        title: label
      })
    }, props), {}, {
      children: children
    }))]
  });
});
export default FormItem;