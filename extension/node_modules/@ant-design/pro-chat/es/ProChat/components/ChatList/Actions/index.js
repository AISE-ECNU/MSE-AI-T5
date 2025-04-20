import { AssistantActionsBar } from "./Assistant";
import { DefaultActionsBar } from "./Fallback";
import { FunctionActionsBar } from "./Function";
import { UserActionsBar } from "./User";
export var renderActions = {
  assistant: AssistantActionsBar,
  function: FunctionActionsBar,
  system: DefaultActionsBar,
  user: UserActionsBar,
  hello: function hello() {
    return undefined;
  }
};