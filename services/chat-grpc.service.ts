import {
  ServerWritableStream,
  ServerUnaryCall,
  sendUnaryData,
  ServerErrorResponse,
  StatusObject,
} from "@grpc/grpc-js";
import { ChatServiceHandlers } from "../proto/chatPackage/ChatService";

import { ChatRoom } from "./chat-room.service";
import { CODE } from "../constant";
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
      console.log("newUser", newUser);
      if (!newUser.name) {
        return callback(null, {
          subcode: CODE.USERNAME_INVALID,
          message: "Username invalid.",
        });
      }
      console.log("newUser", newUser);

      const chatRoom = ChatRoom.getInstance();
      console.log("chatRoom", chatRoom);
      const usersInChatRoom = chatRoom.getUsers();
      const isUserExist = usersInChatRoom.find(
        (_user) => _user.name === newUser.name
      );
      console.log("first");
      if (isUserExist) {
        return callback(null, {
          subcode: CODE.USER_EXIST,
          message: "User already exist.",
        });
      }
      console.log("second");

      chatRoom.addUser({ name: newUser.name });

      const joinNotification: JoinNotification = {
        username: newUser.name,
        timestamp: Date.now(),
      };
      const joinEvent = new JoinEvent(joinNotification);
      console.log("four");

      chatRoom.observers.forEach((_observer) => {
        _observer.write(joinEvent);
      });
      callback(null, { subcode: CODE.SUCCESS, message: "Join success" });
    } catch (error) {
      console.log("error", error);
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
