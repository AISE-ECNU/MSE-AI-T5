import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
var Actions = /*#__PURE__*/memo(function (_ref) {
  var actions = _ref.actions,
    className = _ref.className;
  return /*#__PURE__*/_jsx(Flexbox, {
    align: 'flex-start',
    className: className,
    role: "menubar",
    children: actions
  });
});
export default Actions;