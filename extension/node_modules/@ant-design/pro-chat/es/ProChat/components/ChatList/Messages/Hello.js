import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { memo } from 'react';
import { DefaultMessage } from "./Default";
import { jsx as _jsx } from "react/jsx-runtime";
export var HelloMessage = /*#__PURE__*/memo(function (props) {
  var content = props.content;
  if (typeof content === 'string') return /*#__PURE__*/_jsx(DefaultMessage, _objectSpread({}, props));
  return content;
});