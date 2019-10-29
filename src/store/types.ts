
export interface Socket {
    isConnected: boolean,
    message: string,
}

export interface RootState {
    socket: Socket,
}
