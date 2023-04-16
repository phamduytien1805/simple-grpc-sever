import { ServerWritableStream } from "@grpc/grpc-js";
import { Empty } from "../proto/chatPackage/Empty";
import { ChatEvent } from "../proto/chatPackage/ChatEvent";
export class User {
  constructor(public readonly name: string) {}
}

export class ChatRoom {
  private static instance: ChatRoom;
  private users: User[];
  public observers: ServerWritableStream<Empty, ChatEvent>[];

  private constructor() {
    this.users = [];
    this.observers = [];
  }

  public static getInstance(): ChatRoom {
    if (!ChatRoom.instance) {
      ChatRoom.instance = new ChatRoom();
    }
    return ChatRoom.instance;
  }

  public addUser(user: User) {
    this.users.push(user);
  }

  public addObserver(observer: ServerWritableStream<Empty, ChatEvent>) {
    this.observers.push(observer);
  }

  public removeUser(user: string) {}

  public sendMessage(user: string, message: string) {}

  public getUsers() {
    return this.users;
  }
}
