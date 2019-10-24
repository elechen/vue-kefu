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