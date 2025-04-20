import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import Tag from "../../Tag";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FormTitle = /*#__PURE__*/memo(function (_ref) {
  var className = _ref.className,
    tag = _ref.tag,
    title = _ref.title,
    desc = _ref.desc,
    avatar = _ref.avatar;
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var titleNode = /*#__PURE__*/_jsxs("div", {
    className: cx(styles.formTitle, className),
    children: [/*#__PURE__*/_jsxs(Flexbox, {
      align: 'center',
      direction: 'horizontal',
      gap: 8,
      children: [title, tag && /*#__PURE__*/_jsx(Tag, {
        children: tag
      })]
    }), desc && /*#__PURE__*/_jsx("small", {
      children: desc
    })]
  });
  if (avatar) {
    return /*#__PURE__*/_jsxs(Flexbox, {
      align: "center",
      gap: 8,
      horizontal: true,
      children: [avatar, titleNode]
    });
  }
  return titleNode;
});
export default FormTitle;