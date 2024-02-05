import process from 'process';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

export default async function Decompress(input) {
  const files = input.replace('decompress', '').trim();
  const inputArray = files.split(' ');

  const currFile = inputArray[0];
  const destinationPath = inputArray[1];
  
  if (inputArray.length !== 2) console.error('Invalid input!');


  try {
    const pathToDestination = path.resolve(process.cwd(), currFile.replace('.br', ''));
    const pathToCurrentFile = path.resolve(destinationPath, `${currFile}`);
  
    const rs = createReadStream(pathToCurrentFile);
    const ws = createWriteStream(pathToDestination);
    const brotliDecompressAlgoritm = createBrotliDecompress();
    await pipeline(rs, brotliDecompressAlgoritm, ws);
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
