import { friend } from '@/proto'

export interface Message extends friend.GS2CSendFrdMsg.IFrdMsg {

}

export interface SessionState {
  sessions: { [key: number]: Message[] },
  currentSessionId: number,
}