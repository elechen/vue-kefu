
import { ProfileState } from './modules/profile/types';
import { UserState } from './modules/user/types';
import { SessionState } from './modules/session/types';

export interface Socket {
  isConnected: boolean,
  message: string,
}

export interface RootState {
  socket: Socket,
  profile?: ProfileState,
  user?: UserState,
  session?: SessionState
}
