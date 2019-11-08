export const PRODUCTION = process.env.NODE_ENV === 'production';
export const HOST = PRODUCTION ? '192.168.1.6:8044' : 'localhost:3336';
