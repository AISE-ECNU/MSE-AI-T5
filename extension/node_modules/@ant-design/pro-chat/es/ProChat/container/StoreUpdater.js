import { memo, useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';
import { useProChat } from "../hooks/useProChat";
import { useStoreApi } from "../store";
var StoreUpdater = /*#__PURE__*/memo(function (_ref) {
  var init = _ref.init,
    onChatsChange = _ref.onChatsChange,
    chatRef = _ref.chatRef,
    request = _ref.request,
    userMeta = _ref.userMeta,
    assistantMeta = _ref.assistantMeta,
    helloMessage = _ref.helloMessage,
    transformToChatMessage = _ref.transformToChatMessage,
    actions = _ref.actions,
    inputAreaProps = _ref.inputAreaProps,
    chats = _ref.chats,
    config = _ref.config,
    locale = _ref.locale;
  var storeApi = useStoreApi();
  var useStoreUpdater = createStoreUpdater(storeApi);
  useStoreUpdater('init', init);
  useStoreUpdater('userMeta', userMeta);
  useStoreUpdater('assistantMeta', assistantMeta);
  useStoreUpdater('inputAreaProps', inputAreaProps);
  useStoreUpdater('helloMessage', helloMessage);
  useStoreUpdater('config', config);
  useStoreUpdater('transformToChatMessage', transformToChatMessage);
  useStoreUpdater('actions', actions);
  useStoreUpdater('chats', chats);
  useStoreUpdater('onChatsChange', onChatsChange);
  useStoreUpdater('request', request);
  useStoreUpdater('locale', locale);
  var instance = useProChat();
  useImperativeHandle(chatRef, function () {
    return instance;
  });
  return null;
});
export default StoreUpdater;