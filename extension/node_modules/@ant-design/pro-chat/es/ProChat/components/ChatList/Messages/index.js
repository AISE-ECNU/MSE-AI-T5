import { AssistantMessage } from "./Assistant";
import { DefaultMessage } from "./Default";
import { HelloMessage } from "./Hello";
export var renderMessages = {
  hello: HelloMessage,
  assistant: AssistantMessage,
  default: DefaultMessage
};