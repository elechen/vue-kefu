import { friend } from '@/proto';

export interface User extends friend.IGS2CSendFrdInfo {
  // 客户端需要的信息作为可选属性
  iUnread?: number;
  avatar?: string;
}

export interface UserState {
  users: { [key: number]: User };
  searchResult: friend.GS2CSearchResult.ISearchResult[],
}