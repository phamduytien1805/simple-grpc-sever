import {
  ServerWritableStream,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { ChatServiceHandlers } from "../proto/chatPackage/ChatService";

import { ChatRoom } from "./chat-room.service";
import { ERROR_CODE } from "../constant";
import { User } from "../proto/chatPackage/User";
import { JoinResponse } from "../proto/chatPackage/JoinResponse";
import { ChatMessage } from "../proto/chatPackage/ChatMessage";
import { Empty } from "../proto/chatPackage/Empty";
import { ChatEvent } from "../proto/chatPackage/ChatEvent";
import { UserList } from "../proto/chatPackage/UserList";

export const ChatServices: ChatServiceHandlers = {
  joinRequest(
    call: ServerUnaryCall<User, JoinResponse>,
    callback: sendUnaryData<JoinResponse>
  ) {},
  sendMsg(
    call: ServerUnaryCall<ChatMessage, Empty>,
    callback: sendUnaryData<Empty>
  ) {},

  receiveEvent(call: ServerWritableStream<Empty, ChatEvent>) {},

  getAllUsers(
    call: ServerUnaryCall<Empty, UserList>,
    callback: sendUnaryData<UserList>
  ) {},
};
