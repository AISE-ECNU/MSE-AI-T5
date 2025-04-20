import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["renderInputArea", "__PRO_CHAT_STORE_DEVTOOLS__", "showTitle", "style", "className", "chatItemRenderConfig", "backToBottomConfig", "appStyle", "inputRender", "markdownProps", "renderErrorMessages", "inputAreaRender", "itemShouldUpdate", "onScroll", "sendButtonRender"];
import { App as Container } from 'antd';
import App from "./App";
import { ProChatProvider } from "./Provider";

/**
 * ProChatProps 是 ProChat 组件的属性类型定义。
 * @template T - 聊天记录的数据类型
 */
import { jsx as _jsx } from "react/jsx-runtime";
export function ProChat(_ref) {
  var renderInputArea = _ref.renderInputArea,
    __PRO_CHAT_STORE_DEVTOOLS__ = _ref.__PRO_CHAT_STORE_DEVTOOLS__,
    showTitle = _ref.showTitle,
    style = _ref.style,
    className = _ref.className,
    chatItemRenderConfig = _ref.chatItemRenderConfig,
    backToBottomConfig = _ref.backToBottomConfig,
    appStyle = _ref.appStyle,
    inputRender = _ref.inputRender,
    markdownProps = _ref.markdownProps,
    renderErrorMessages = _ref.renderErrorMessages,
    inputAreaRender = _ref.inputAreaRender,
    itemShouldUpdate = _ref.itemShouldUpdate,
    onScroll = _ref.onScroll,
    sendButtonRender = _ref.sendButtonRender,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProChatProvider, _objectSpread(_objectSpread({}, props), {}, {
    devtoolOptions: __PRO_CHAT_STORE_DEVTOOLS__,
    children: /*#__PURE__*/_jsx(Container, {
      style: _objectSpread({
        height: '100%',
        width: '100%',
        position: 'relative'
      }, appStyle),
      className: className,
      children: /*#__PURE__*/_jsx(App, {
        chatItemRenderConfig: chatItemRenderConfig,
        inputRender: inputRender,
        sendButtonRender: sendButtonRender,
        inputAreaRender: renderInputArea || inputAreaRender,
        chatRef: props.chatRef,
        showTitle: showTitle,
        style: style,
        onScroll: onScroll,
        itemShouldUpdate: itemShouldUpdate,
        renderErrorMessages: renderErrorMessages,
        backToBottomConfig: backToBottomConfig,
        className: className,
        markdownProps: markdownProps
      })
    })
  }));
}