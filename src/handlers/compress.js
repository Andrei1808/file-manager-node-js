import process from 'process';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';

export default async function Compress(input) {
  const files = input.replace('compress', '').trim();
  const inputArray = files.split(' ');
  
    const currFile = inputArray[0];
    const destinationPath = inputArray[1];

    const pathToCurrentFile = path.resolve(process.cwd(), currFile);
    const pathToDestination = path.resolve(destinationPath, `${currFile}.br`);

    try {
      
        const rs = createReadStream(pathToCurrentFile);
        const ws = createWriteStream(pathToDestination);
        const brotliCompressAlgoritm = createBrotliCompress();
        await pipeline(rs,brotliCompressAlgoritm,ws)
   
  } catch (error) {
        console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
