import {
  ServerWritableStream,
  ServerUnaryCall,
  sendUnaryData,
  ServerErrorResponse,
  StatusObject,
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
import { JoinNotification } from "../proto/chatPackage/JoinNotification";
import { JoinEvent, MessageEvent } from "../events/chat-events";

export const ChatServices: ChatServiceHandlers = {
  joinRequest(
    call: ServerUnaryCall<User, JoinResponse>,
    callback: sendUnaryData<JoinResponse>
  ) {
    try {
      const newUser = call.request;
      if (!newUser.name) {
        return callback(null, {
          error: ERROR_CODE.USERNAME_INVALID,
          message: "Username invalid.",
        });
      }

      const chatRoom = ChatRoom.getInstance();
      const usersInChatRoom = chatRoom.getUsers();
      const isUserExist = usersInChatRoom.find(
        (_user) => _user.name === newUser.name
      );
      if (isUserExist) {
        return callback(null, {
          error: ERROR_CODE.USER_EXIST,
          message: "User already exist.",
        });
      }

      chatRoom.addUser({ name: newUser.name });

      const joinNotification: JoinNotification = {
        username: newUser.name,
        timestamp: Date.now(),
      };
      const joinEvent = new JoinEvent(joinNotification);

      chatRoom.observers.forEach((_observer) => {
        _observer.write(joinEvent);
      });
    } catch (error) {
      callback(error as Partial<StatusObject>);
    }
  },

  sendMsg(
    call: ServerUnaryCall<ChatMessage, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    try {
      const chatObj = call.request;
      const chatRoom = ChatRoom.getInstance();

      const messageEvent = new MessageEvent(chatObj);

      chatRoom.observers.forEach((_observer) => {
        _observer.write(messageEvent);
      });

      callback(null, {});
    } catch (error) {
      callback(error as Partial<StatusObject>);
    }
  },

  receiveEvent(call: ServerWritableStream<Empty, ChatEvent>) {
    const chatRoom = ChatRoom.getInstance();
    chatRoom.addObserver(call);
  },

  getAllUsers(
    call: ServerUnaryCall<Empty, UserList>,
    callback: sendUnaryData<UserList>
  ) {
    const currentUsersInRoom = ChatRoom.getInstance().getUsers();
    callback(null, { users: currentUsersInRoom });
  },
};
