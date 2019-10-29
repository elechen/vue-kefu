export interface User {
    uid: number;
    name: string;
    avatar?: string;
}

export interface ProfileState {
    user?: User;
    login: boolean;
}