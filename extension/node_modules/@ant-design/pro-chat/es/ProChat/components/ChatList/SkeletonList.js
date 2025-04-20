import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { Skeleton } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return {
    user: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 16px;\n\n    .", "-skeleton-paragraph {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n    }\n  "])), prefixCls)
  };
});
var SkeletonList = /*#__PURE__*/memo(function () {
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsxs(Flexbox, {
    gap: 24,
    padding: 12,
    style: {
      marginTop: 24
    },
    children: [/*#__PURE__*/_jsx(Skeleton, {
      active: true,
      avatar: {
        size: 40
      },
      className: styles.user,
      paragraph: {
        width: ['50%', '30%']
      },
      title: false
    }), /*#__PURE__*/_jsx(Skeleton, {
      active: true,
      avatar: {
        size: 40
      },
      paragraph: {
        width: ['50%', '30%']
      },
      title: false
    })]
  });
});
export default SkeletonList;