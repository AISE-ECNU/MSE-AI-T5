import { Alert } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStyles } from "../style";
import { jsx as _jsx } from "react/jsx-runtime";
var ErrorContent = /*#__PURE__*/memo(function (_ref) {
  var message = _ref.message,
    placement = _ref.placement;
  var _useStyles = useStyles({
      placement: placement
    }),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsx(Flexbox, {
    gap: 8,
    children: /*#__PURE__*/_jsx(Alert, {
      className: styles.alert,
      showIcon: true,
      type: 'error',
      message: message
    })
  });
});
export default ErrorContent;