import { login } from '@/proto';

export interface User extends login.IGS2CLoginSucc {
}

export interface ProfileState {
  user?: User;
  login: boolean;
}