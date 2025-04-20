import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "devtoolOptions", "chats", "onChatsChange", "loading", "helloMessage", "userMeta", "inputAreaProps", "assistantMeta", "actions", "transformToChatMessage", "request", "locale"];
import StoreUpdater from "./StoreUpdater";
import { memo } from 'react';
import { createStore as _createStore, Provider, useStoreApi } from "../store";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ProChatProvider = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
    devtoolOptions = _ref.devtoolOptions,
    chats = _ref.chats,
    onChatsChange = _ref.onChatsChange,
    loading = _ref.loading,
    helloMessage = _ref.helloMessage,
    userMeta = _ref.userMeta,
    inputAreaProps = _ref.inputAreaProps,
    assistantMeta = _ref.assistantMeta,
    actions = _ref.actions,
    transformToChatMessage = _ref.transformToChatMessage,
    request = _ref.request,
    locale = _ref.locale,
    props = _objectWithoutProperties(_ref, _excluded);
  var isWrapped = true;
  var Content = /*#__PURE__*/_jsxs(_Fragment, {
    children: [children, /*#__PURE__*/_jsx(StoreUpdater, {
      chatRef: props.chatRef,
      init: !loading,
      helloMessage: helloMessage,
      chats: chats,
      actions: actions,
      userMeta: userMeta,
      request: request,
      transformToChatMessage: transformToChatMessage,
      inputAreaProps: inputAreaProps,
      assistantMeta: assistantMeta,
      onChatsChange: onChatsChange,
      locale: locale
    })]
  });
  try {
    useStoreApi();
  } catch (e) {
    isWrapped = false;
  }
  if (isWrapped) {
    return Content;
  }
  return /*#__PURE__*/_jsx(Provider, {
    createStore: function createStore() {
      return _createStore(props, devtoolOptions);
    },
    children: Content
  });
});