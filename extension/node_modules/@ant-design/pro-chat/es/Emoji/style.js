import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      position: relative;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      line-height: 1;\n      text-align: center;\n    "]))),
    loading: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: absolute;\n      inset: 0;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      width: 100%;\n      height: 100%;\n\n      color: ", ";\n    "])), token.colorText)
  };
});