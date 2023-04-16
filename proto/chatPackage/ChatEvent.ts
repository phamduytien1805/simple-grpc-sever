// Original file: proto/chat.proto

import type { ChatMessage as _chatPackage_ChatMessage, ChatMessage__Output as _chatPackage_ChatMessage__Output } from '../chatPackage/ChatMessage';
import type { JoinNotification as _chatPackage_JoinNotification, JoinNotification__Output as _chatPackage_JoinNotification__Output } from '../chatPackage/JoinNotification';

export interface ChatEvent {
  'chatMessage'?: (_chatPackage_ChatMessage | null);
  'joinNotification'?: (_chatPackage_JoinNotification | null);
  'event'?: "chatMessage"|"joinNotification";
}

export interface ChatEvent__Output {
  'chatMessage'?: (_chatPackage_ChatMessage__Output);
  'joinNotification'?: (_chatPackage_JoinNotification__Output);
}
