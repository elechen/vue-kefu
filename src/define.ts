export interface Player {
    uid: number;
    name: string;
    rmb: number;
}

export interface Message {
    date: number;
    content: string;
    sender: number;
}

export interface Session {
    id: number;
    messages: Message[];
    player: Player;
}