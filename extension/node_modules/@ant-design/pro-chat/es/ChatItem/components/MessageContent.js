import { useResponsive } from 'antd-style';
import { memo, useContext } from 'react';
import { Flexbox } from 'react-layout-kit';
import EditableMessage from "../../EditableMessage";
import { ConfigProvider } from 'antd';
import { useStyles } from "../style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var MessageContent = /*#__PURE__*/memo(function (_ref) {
  var editing = _ref.editing,
    onChange = _ref.onChange,
    onEditingChange = _ref.onEditingChange,
    className = _ref.className,
    text = _ref.text,
    message = _ref.message,
    placement = _ref.placement,
    messageExtra = _ref.messageExtra,
    renderMessage = _ref.renderMessage,
    markdownProps = _ref.markdownProps,
    type = _ref.type,
    primary = _ref.primary,
    onDoubleClick = _ref.onDoubleClick;
  var _useStyles = useStyles({
      editing: editing,
      placement: placement,
      primary: primary,
      type: type
    }),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixClass = getPrefixCls('pro-chat');
  var content = /*#__PURE__*/_jsx(EditableMessage, {
    classNames: {
      input: styles.editingInput
    },
    editButtonSize: 'small',
    editing: editing,
    fullFeaturedCodeBlock: true,
    onChange: onChange,
    onEditingChange: onEditingChange,
    openModal: mobile ? editing : undefined,
    text: text,
    value: String(message || '...'),
    markdownProps: markdownProps
  });
  var messageContent = renderMessage ? renderMessage(content) : content;
  return /*#__PURE__*/_jsxs(Flexbox, {
    className: cx(styles.message, className, editing && styles.editingContainer),
    onDoubleClick: onDoubleClick,
    children: [messageContent, messageExtra && !editing ? /*#__PURE__*/_jsx("div", {
      className: "".concat(cx(styles.messageExtra, "".concat(prefixClass, "-message-extra"))),
      children: messageExtra
    }) : null]
  });
});
export default MessageContent;