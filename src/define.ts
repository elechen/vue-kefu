export const PRODUCTION = process.env.NODE_ENV === 'production';

// 本地测试
// export const HOST = PRODUCTION ? '42.62.106.213:8044' : '42.62.106.213:8044';

// 内网测试服
// export const HOST = PRODUCTION ? '192.168.1.6:8044' : 'localhost:3336';

// 外网测试服
// export const HOST = PRODUCTION ? '39.98.51.32:8044' : 'localhost:3336';

// 正式服
export const HOST = PRODUCTION ? '42.62.106.213:8044' : 'localhost:3336';

export const BIT_SUPER_GM = 0x1;
