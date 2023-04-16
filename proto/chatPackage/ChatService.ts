// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatEvent as _chatPackage_ChatEvent, ChatEvent__Output as _chatPackage_ChatEvent__Output } from '../chatPackage/ChatEvent';
import type { ChatMessage as _chatPackage_ChatMessage, ChatMessage__Output as _chatPackage_ChatMessage__Output } from '../chatPackage/ChatMessage';
import type { Empty as _chatPackage_Empty, Empty__Output as _chatPackage_Empty__Output } from '../chatPackage/Empty';
import type { JoinResponse as _chatPackage_JoinResponse, JoinResponse__Output as _chatPackage_JoinResponse__Output } from '../chatPackage/JoinResponse';
import type { User as _chatPackage_User, User__Output as _chatPackage_User__Output } from '../chatPackage/User';
import type { UserList as _chatPackage_UserList, UserList__Output as _chatPackage_UserList__Output } from '../chatPackage/UserList';

export interface ChatServiceClient extends grpc.Client {
  getAllUsers(argument: _chatPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _chatPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _chatPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _chatPackage_Empty, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _chatPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _chatPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _chatPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _chatPackage_Empty, callback: grpc.requestCallback<_chatPackage_UserList__Output>): grpc.ClientUnaryCall;
  
  joinRequest(argument: _chatPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  joinRequest(argument: _chatPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  joinRequest(argument: _chatPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  joinRequest(argument: _chatPackage_User, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  joinRequest(argument: _chatPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  joinRequest(argument: _chatPackage_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  joinRequest(argument: _chatPackage_User, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  joinRequest(argument: _chatPackage_User, callback: grpc.requestCallback<_chatPackage_JoinResponse__Output>): grpc.ClientUnaryCall;
  
  receiveEvent(argument: _chatPackage_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatEvent__Output>;
  receiveEvent(argument: _chatPackage_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatEvent__Output>;
  receiveEvent(argument: _chatPackage_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatEvent__Output>;
  receiveEvent(argument: _chatPackage_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatEvent__Output>;
  
  sendMsg(argument: _chatPackage_ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _chatPackage_ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _chatPackage_ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _chatPackage_ChatMessage, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _chatPackage_ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _chatPackage_ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _chatPackage_ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _chatPackage_ChatMessage, callback: grpc.requestCallback<_chatPackage_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  getAllUsers: grpc.handleUnaryCall<_chatPackage_Empty__Output, _chatPackage_UserList>;
  
  joinRequest: grpc.handleUnaryCall<_chatPackage_User__Output, _chatPackage_JoinResponse>;
  
  receiveEvent: grpc.handleServerStreamingCall<_chatPackage_Empty__Output, _chatPackage_ChatEvent>;
  
  sendMsg: grpc.handleUnaryCall<_chatPackage_ChatMessage__Output, _chatPackage_Empty>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  getAllUsers: MethodDefinition<_chatPackage_Empty, _chatPackage_UserList, _chatPackage_Empty__Output, _chatPackage_UserList__Output>
  joinRequest: MethodDefinition<_chatPackage_User, _chatPackage_JoinResponse, _chatPackage_User__Output, _chatPackage_JoinResponse__Output>
  receiveEvent: MethodDefinition<_chatPackage_Empty, _chatPackage_ChatEvent, _chatPackage_Empty__Output, _chatPackage_ChatEvent__Output>
  sendMsg: MethodDefinition<_chatPackage_ChatMessage, _chatPackage_Empty, _chatPackage_ChatMessage__Output, _chatPackage_Empty__Output>
}
