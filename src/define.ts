export const DEV = true;
export const HOST = '192.168.1.6:8044';
// export const HOST = 'localhost:3336';

export interface Player {
  uid: number;
  name: string;
  recentchattime: number;
  online: number;
  rmb: number;
}

export interface Message {
  timestamp: number;
  content: string;
  sender: number;
}

export interface Session {
  id: number;
  messages: Message[];
  player: Player;
}
