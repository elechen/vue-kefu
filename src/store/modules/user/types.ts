import { friend } from '@/proto';

export interface User extends friend.IGS2CSendFrdInfo {
  // 客户端需要的信息作为可选属性
  iUnreadCnt?: number;
  lGM?: string[];
}

export interface UserState {
  users: { [key: number]: User };
  unreadCnt: { [key: number]: number };
  curChatGM: { [key: number]: string[] };
  searchResult: friend.GS2CSearchResult.ISearchResult[],
}