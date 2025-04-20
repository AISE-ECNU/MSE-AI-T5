import { Divider } from 'antd';
import { Timer } from 'lucide-react';
import { memo } from 'react';
import Icon from "../Icon";
import Tag from "../components/Tag";

/**
 * 历史记录分割线组件的属性。
 */
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 历史记录分割线组件。
 */
var HistoryDivider = /*#__PURE__*/memo(function (_ref) {
  var enable = _ref.enable,
    text = _ref.text;
  if (!enable) return null;
  return /*#__PURE__*/_jsx("div", {
    style: {
      padding: '0 20px'
    },
    children: /*#__PURE__*/_jsx(Divider, {
      children: /*#__PURE__*/_jsx(Tag, {
        icon: /*#__PURE__*/_jsx(Icon, {
          icon: Timer
        }),
        children: text || 'History Message'
      })
    })
  });
});
export default HistoryDivider;