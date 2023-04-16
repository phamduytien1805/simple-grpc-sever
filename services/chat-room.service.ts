export class User {
  constructor(private readonly name: string, private readonly observer: any) {}
}

export class ChatRoom {
  private static instance: ChatRoom;
  private users: User[];

  private constructor() {
    this.users = [];
  }

  public static getInstance(): ChatRoom {
    if (!ChatRoom.instance) {
      ChatRoom.instance = new ChatRoom();
    }
    return ChatRoom.instance;
  }

  public addUser(name: string) {}

  public removeUser(user: string) {}

  public sendMessage(user: string, message: string) {}

  public getUsers() {
    return this.users;
  }
}
