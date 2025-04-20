import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "itemMinWidth", "footer", "form", "items", "children"];
import { Form as AntForm } from 'antd';
import { forwardRef } from 'react';
import FormFooter from "./components/FormFooter";
import FormGroup from "./components/FormGroup";
import FormItem from "./components/FormItem";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FormParent = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
    itemMinWidth = _ref.itemMinWidth,
    footer = _ref.footer,
    form = _ref.form,
    items = _ref.items,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsxs(AntForm, _objectSpread(_objectSpread({
    className: cx(styles.form, className),
    colon: false,
    form: form,
    layout: "horizontal",
    ref: ref
  }, props), {}, {
    children: [items === null || items === void 0 ? void 0 : items.map(function (group, groupIndex) {
      return /*#__PURE__*/_jsx(FormGroup, {
        extra: group === null || group === void 0 ? void 0 : group.extra,
        icon: group === null || group === void 0 ? void 0 : group.icon,
        title: group.title,
        children: group.children.filter(function (item) {
          return !item.hidden;
        }).map(function (item, itemIndex) {
          return /*#__PURE__*/_jsx(FormItem, _objectSpread({
            divider: itemIndex !== 0,
            minWidth: itemMinWidth
          }, item), itemIndex);
        })
      }, groupIndex);
    }), children, footer && /*#__PURE__*/_jsx(FormFooter, {
      children: footer
    })]
  }));
});
var Form = FormParent;
Form.Item = FormItem;
Form.Group = FormGroup;
export default Form;