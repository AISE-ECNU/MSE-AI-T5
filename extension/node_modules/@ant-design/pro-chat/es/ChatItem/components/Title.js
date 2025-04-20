import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { formatTime } from "../utils/formatTime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Title = /*#__PURE__*/memo(function (_ref) {
  var showTitle = _ref.showTitle,
    className = _ref.className,
    placement = _ref.placement,
    time = _ref.time,
    avatar = _ref.avatar;
  return /*#__PURE__*/_jsxs(Flexbox, {
    className: className,
    direction: placement === 'left' ? 'horizontal' : 'horizontal-reverse',
    gap: 4,
    children: [showTitle ? avatar.title || 'untitled' : undefined, time && /*#__PURE__*/_jsx("time", {
      children: formatTime(time)
    })]
  });
});
export default Title;