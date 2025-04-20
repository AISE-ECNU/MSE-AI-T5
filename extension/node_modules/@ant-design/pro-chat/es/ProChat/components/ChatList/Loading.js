import { useTheme } from 'antd-style';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Svg = function Svg() {
  return /*#__PURE__*/_jsxs("svg", {
    viewBox: "0 0 32 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("circle", {
      cx: "0",
      cy: "12",
      r: "0",
      transform: "translate(8 0)",
      children: /*#__PURE__*/_jsx("animate", {
        attributeName: "r",
        begin: "0",
        calcMode: "spline",
        dur: "1.2s",
        keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
        keyTimes: "0;0.2;0.7;1",
        repeatCount: "indefinite",
        values: "0; 4; 0; 0"
      })
    }), /*#__PURE__*/_jsx("circle", {
      cx: "0",
      cy: "12",
      r: "0",
      transform: "translate(16 0)",
      children: /*#__PURE__*/_jsx("animate", {
        attributeName: "r",
        begin: "0.3",
        calcMode: "spline",
        dur: "1.2s",
        keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
        keyTimes: "0;0.2;0.7;1",
        repeatCount: "indefinite",
        values: "0; 4; 0; 0"
      })
    }), /*#__PURE__*/_jsx("circle", {
      cx: "0",
      cy: "12",
      r: "0",
      transform: "translate(24 0)",
      children: /*#__PURE__*/_jsx("animate", {
        attributeName: "r",
        begin: "0.6",
        calcMode: "spline",
        dur: "1.2s",
        keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8",
        keyTimes: "0;0.2;0.7;1",
        repeatCount: "indefinite",
        values: "0; 4; 0; 0"
      })
    })]
  });
};
var BubblesLoading = function BubblesLoading() {
  var _useTheme = useTheme(),
    colorTextTertiary = _useTheme.colorTextTertiary;
  return /*#__PURE__*/_jsx("div", {
    style: {
      fill: colorTextTertiary,
      height: 24,
      width: 32
    },
    children: /*#__PURE__*/_jsx(Svg, {})
  });
};
export default BubblesLoading;