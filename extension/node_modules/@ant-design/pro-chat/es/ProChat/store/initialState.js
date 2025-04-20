import { DEFAULT_AVATAR, DEFAULT_USER_AVATAR } from "../const/meta";
export var initialModelConfig = {
  historyCount: 1,
  model: 'gpt-3.5-turbo',
  params: {
    frequency_penalty: 0,
    presence_penalty: 0,
    temperature: 0.6,
    top_p: 1
  },
  systemRole: ''
};
export var initialState = {
  chats: [],
  init: true,
  displayMode: 'chat',
  userMeta: {
    avatar: DEFAULT_USER_AVATAR
  },
  assistantMeta: {
    avatar: DEFAULT_AVATAR
  },
  config: initialModelConfig
  // stream: true,
};