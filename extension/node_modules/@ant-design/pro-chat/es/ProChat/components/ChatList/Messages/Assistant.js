import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["id", "content"];
import { memo } from 'react';
import { DefaultMessage } from "./Default";
import { jsx as _jsx } from "react/jsx-runtime";
export var AssistantMessage = /*#__PURE__*/memo(function (_ref) {
  var id = _ref.id,
    content = _ref.content,
    props = _objectWithoutProperties(_ref, _excluded);
  // todo: need a custom render
  return /*#__PURE__*/_jsx(DefaultMessage, _objectSpread({
    content: content,
    id: id
  }, props));
});