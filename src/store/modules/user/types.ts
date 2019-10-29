export interface User {
  uid: number;
  name: string;
  avatar?: string;
  recentchattime?: number;
}

export interface UserState {
  users: { [key: number]: User };
}