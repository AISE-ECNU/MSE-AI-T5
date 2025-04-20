import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["content", "className", "placement", "size"];
import copy from 'copy-to-clipboard';
import { Copy } from 'lucide-react';
import { memo } from 'react';
import ActionIcon from "../../ActionIcon";
import { useCopied } from "../../hooks/useCopied";
import { jsx as _jsx } from "react/jsx-runtime";
var CopyButton = /*#__PURE__*/memo(function (_ref) {
  var content = _ref.content,
    className = _ref.className,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'right' : _ref$placement,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'site' : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useCopied = useCopied(),
    copied = _useCopied.copied,
    setCopied = _useCopied.setCopied;
  return /*#__PURE__*/_jsx(ActionIcon, _objectSpread(_objectSpread({}, props), {}, {
    className: className,
    glass: true,
    icon: Copy,
    onClick: function onClick() {
      copy(content);
      setCopied();
    },
    placement: placement,
    size: size,
    title: copied ? '✅ Success' : 'Copy'
  }));
});
export default CopyButton;