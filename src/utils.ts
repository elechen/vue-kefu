
export const Money2VIP: { [key: number]: number } = {
  100000: 10,
  60000: 9,
  40000: 8,
  20000: 7,
  10000: 6,
  5000: 5,
  2000: 4,
  648: 3,
  100: 2,
  0: 1,
};

export function GetVIP(iMoney: number): number {
  let VIP = 0;
  const lMoney = Object.keys(Money2VIP).map(Number).sort((a, b) => (a > b ? -1 : 1));
  lMoney.forEach((m) => {
    if (VIP === 0 && iMoney > m) {
      VIP = Money2VIP[m];
    }
  });
  return VIP;
}

export enum IMG_TYPE {
  small = 0,
  big = 1,
}

export function GetImgUrl(sn: string, type: IMG_TYPE) {
  const host = 'http://pubaudio.yuelangnet.com:8001';
  const pwd = '0dd7beef22f7fd2af9918b05fc42b458';
  const action = 'getpic';
  return `${host}//?action=${action}&passport=${pwd}&picflag=${sn}&type=${type}`;
}
