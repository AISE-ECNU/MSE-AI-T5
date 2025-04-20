import { ModelConfig } from "../types/config";
import { ChatMessage } from "../../types/message";
export declare const isFunctionMessage: (content: string) => boolean;
export declare const getSlicedMessagesWithConfig: (messages: ChatMessage[], config: ModelConfig) => ChatMessage[];
