import { createStyles } from 'antd-style';
import global from "./global";
export var useOverrideStyles = createStyles(function (_ref) {
  var token = _ref.token,
    prefixCls = _ref.prefixCls,
    cx = _ref.cx;
  var rootClassName = "".concat(prefixCls, "-pro-chat");
  return {
    container: cx(rootClassName, global(token, rootClassName))
  };
});