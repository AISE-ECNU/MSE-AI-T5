import { useTheme } from 'antd-style';
import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var StopLoadingIcon = /*#__PURE__*/memo(function () {
  var theme = useTheme();
  return /*#__PURE__*/_jsx("svg", {
    className: 'anticon',
    color: "currentColor",
    height: 16,
    viewBox: "0 0 1024 1024",
    width: 16,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /*#__PURE__*/_jsxs("g", {
      fill: "none",
      children: [/*#__PURE__*/_jsx("circle", {
        cx: "512",
        cy: "512",
        fill: "none",
        r: "426",
        stroke: theme.colorBorder,
        strokeWidth: "72"
      }), /*#__PURE__*/_jsx("rect", {
        fill: "currentColor",
        height: "252",
        rx: "24",
        ry: "24",
        width: "252",
        x: "386",
        y: "386"
      }), /*#__PURE__*/_jsx("path", {
        d: "M938.667 512C938.667 276.359 747.64 85.333 512 85.333",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "73",
        children: /*#__PURE__*/_jsx("animateTransform", {
          attributeName: "transform",
          dur: "1s",
          from: "0 512 512",
          repeatCount: "indefinite",
          to: "360 512 512",
          type: "rotate"
        })
      })]
    })
  });
});
export default StopLoadingIcon;