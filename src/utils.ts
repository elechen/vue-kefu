import axios from 'axios';
import { saveAs } from 'file-saver';

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

const HOST_IMG = 'http://192.168.1.6:8001';
// const HOST_IMG = 'http://pubaudio.yuelangnet.com:8001';
const PWD_IMG = '0dd7beef22f7fd2af9918b05fc42b458';

export function GetImgUrl(sn: string, type: IMG_TYPE) {
  const action = 'getpic';
  return `${HOST_IMG}/?action=${action}&passport=${PWD_IMG}&picflag=${sn}&type=${type}`;
}

export interface ThumbnailOptions {
  width?: number,
  height?: number,
  quality?: number,
  type?: string,
}
const OPTIONS = {
  width: 256, height: 256, quality: 80, type: 'image/png',
};
export function createThumbnail(sourceBlob: Blob,
  callback: (blob: Blob | null) => void,
  options?: ThumbnailOptions) {
  let opts: ThumbnailOptions = OPTIONS;
  if (options) {
    opts = { ...opts, ...options };
  }
  const reader = new FileReader();
  reader.onload = function onload() {
    const image: HTMLImageElement = new Image();
    image.onload = () => {
      // create an off-screen canvas
      const canvas: HTMLCanvasElement = document.createElement('canvas');
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      // Calculate the size of the thumbnail, to best fit within max/width (cropspadding)
      const { width, height } = opts;
      const thumbnailScale = (image.width / image.height) > ((width as number) / (height as number))
        ? (width as number) / image.width
        : (height as number) / image.height;
      const thumbnailWidth = image.width * thumbnailScale;
      const thumbnailHeight = image.height * thumbnailScale;
      // set its dimension to target size
      canvas.width = thumbnailWidth;
      canvas.height = thumbnailHeight;
      // draw source image into the off-screen canvas:
      ctx.drawImage(image, 0, 0, thumbnailWidth, thumbnailHeight);
      const { type, quality } = opts;
      canvas.toBlob(callback, type, quality);
    };
    image.src = reader.result as string;
  };
  reader.readAsDataURL(sourceBlob);
}

export function uploadClickBoardImage(sourceBlob: Blob, callback: (ret: any) => void) {
  const reader = new FileReader();
  const content: { small: any, big: any } = { small: null, big: null };
  const base64Header = 'data:image/png;base64,';
  reader.onload = () => {
    const big = reader.result as string;
    saveAs(new Blob([big]), '3.png');
    // saveAs(base64toBlob((reader.result as string).replace(base64Header, '')), '2.png');
    // content.big = base64toBlob((reader.result as string).replace(base64Header, ''));
    // // const download = document.createElement('a');
    // // download.href = content.big;
    // // download.download = 'clickboard.png';
    // // download.click();
    // createThumbnail(sourceBlob, (blob: Blob | null) => {
    //   const reader2 = new FileReader();
    //   reader2.onload = () => {
    //     content.small = base64toBlob((reader2.result as string).replace(base64Header, ''));
    //     uploadContent(content, callback);
    //   };
    //   reader2.readAsDataURL(blob as Blob);
    // });
  };
  reader.readAsArrayBuffer(sourceBlob);
}

function base64toBlob(base64Data: string) {
  const contentType = 'image/png';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);
  for (let sliceIndex = 0; sliceIndex < slicesCount; sliceIndex += 1) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; i += 1, offset += 1) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

function ab2str(buf: any) {
  const nums = new Uint8Array(buf) as any as number[];
  return String.fromCharCode.apply(null, nums);
}

function uploadContent(content: { small: Blob, big: Blob },
  callback: (ret: any) => void) {
  saveAs(content.big, 'uploadBlob_big.png');
  saveAs(content.small, 'uploadBlob_small.png');
  // return;
  // const sContent = `big=${ab2str(content.big)}&small=${ab2str(content.small)}`;
  // const action = 'putpic2';
  // const bigLen = content.big.length;
  // const smallLen = content.small.length;
  // const url = `${HOST_IMG}/?action=${action}&passport=${PWD_IMG}`;
  // console.log(url);
  // console.log(content.big);
  // console.log(content.small);
  // console.log(sContent);
  // const oMyBlob = new Blob([content.big], { type: 'image/png' }); // the blob
  // window.open(URL.createObjectURL(oMyBlob), 'big.png');
  // const oMyBlob2 = new Blob([content.small], { type: 'image/png' }); // the blob
  // window.open(URL.createObjectURL(oMyBlob2), 'small.png');
  // const config = {
  //   headers: { 'Content-Type': 'text/plain' },
  //   data: sContent,
  // };
  // axios.post(url, sContent).then((data) => {
  //   console.log(data.data);
  //   callback(data.data);
  // }).catch((error: any) => {
  //   console.log('uploadContent error', error);
  //   callback({ error });
  // });
}
