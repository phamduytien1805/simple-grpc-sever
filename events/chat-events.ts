import { ChatEvent } from "../proto/chatPackage/ChatEvent";
import { ChatMessage } from "../proto/chatPackage/ChatMessage";
import { JoinNotification } from "../proto/chatPackage/JoinNotification";
export class MessageEvent implements ChatEvent {
  chatMessage: ChatMessage;
  event: "chatMessage" = "chatMessage";
  constructor(chatMessage: ChatMessage) {
    this.chatMessage = chatMessage;
  }
}

export class JoinEvent implements ChatEvent {
  joinNotification: JoinNotification;
  event: "joinNotification" = "joinNotification";
  constructor(joinNotification: JoinNotification) {
    this.joinNotification = joinNotification;
  }
}
