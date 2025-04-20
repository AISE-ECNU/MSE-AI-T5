import { memo } from 'react';
import { LOADING_FLAT } from "../../../const/message";
import BubblesLoading from "../Loading";
import { jsx as _jsx } from "react/jsx-runtime";
export var DefaultMessage = /*#__PURE__*/memo(function (_ref) {
  var id = _ref.id,
    editableContent = _ref.editableContent,
    content = _ref.content;
  if (content === LOADING_FLAT) return /*#__PURE__*/_jsx(BubblesLoading, {});
  return /*#__PURE__*/_jsx("div", {
    id: id,
    children: editableContent
  });
});