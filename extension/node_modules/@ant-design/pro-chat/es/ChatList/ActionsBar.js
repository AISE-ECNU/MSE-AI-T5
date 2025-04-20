import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["text"];
import { memo } from 'react';
import ActionIconGroup from "../ActionIconGroup";
import { useChatListActionsBar } from "../hooks/useChatListActionsBar";

/**
 * ActionsBar组件的属性类型定义
 */
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * ActionsBar 组件
 * 用于渲染操作按钮组。
 */
var ActionsBar = /*#__PURE__*/memo(function (_ref) {
  var text = _ref.text,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useChatListActionsBa = useChatListActionsBar(text),
    regenerate = _useChatListActionsBa.regenerate,
    edit = _useChatListActionsBa.edit,
    copy = _useChatListActionsBa.copy,
    divider = _useChatListActionsBa.divider,
    del = _useChatListActionsBa.del;
  return /*#__PURE__*/_jsx(ActionIconGroup, _objectSpread({
    dropdownMenu: [edit, copy, regenerate, divider, del],
    items: [regenerate, edit],
    type: "ghost"
  }, rest));
});
export default ActionsBar;