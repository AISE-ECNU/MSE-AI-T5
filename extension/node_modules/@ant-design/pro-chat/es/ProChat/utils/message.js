import { FUNCTION_MESSAGE_FLAG } from "../const/message";
export var isFunctionMessage = function isFunctionMessage(content) {
  return content.startsWith(FUNCTION_MESSAGE_FLAG);
};
export var getSlicedMessagesWithConfig = function getSlicedMessagesWithConfig(messages, config) {
  // 如果没有开启历史消息数限制，或者限制为 0，则直接返回
  if (!config.enableHistoryCount || !config.historyCount) return messages;

  // 如果开启了，则返回尾部的N条消息
  return messages.reverse().slice(0, config.historyCount).reverse();
};