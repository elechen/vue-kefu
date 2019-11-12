
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

const thumbnailMaxWidth = 128;
const thumbnailMaxHeight = 128;

export function createThumbnail(image: any) {
  // create an off-screen canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Calculate the size of the thumbnail, to best fit within max/width (cropspadding)
  const thumbnailScale = (image.width / image.height) > (thumbnailMaxWidth / thumbnailMaxHeight)
    ? thumbnailMaxWidth / image.width
    : thumbnailMaxHeight / image.height;
  const thumbnailWidth = image.width * thumbnailScale;
  const thumbnailHeight = image.height * thumbnailScale;

  // set its dimension to target size
  canvas.width = thumbnailWidth;
  canvas.height = thumbnailHeight;

  // draw source image into the off-screen canvas:
  ctx!.drawImage(image, 0, 0, thumbnailWidth, thumbnailHeight);

  // Draw border (optional)
  // ctx.rect(0, 0, thumbnailWidth, thumbnailHeight - 1);
  // ctx.strokeStyle = "#555555";
  // ctx.stroke();

  // encode image to data-uri with base64 version of compressed image
  const thumbnail = new Image();
  thumbnail.src = canvas.toDataURL('image/png', 50);
  return thumbnail.src;
}
