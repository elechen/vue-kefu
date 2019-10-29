export interface Message {
  sender: any,
  timestamp: number,
  content: string,
}

export interface SessionState {
  sessions: { [key: number]: Message[] },
  currentSessionId: number,
}