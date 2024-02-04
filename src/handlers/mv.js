import process from 'process';
import path from 'path';
import fs, { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export default async function Mv(input) {

    const files = input.replace('mv', '').trim();
    const inputArray = files.split(' ');

    const currFile = inputArray[0];
    const destination = inputArray[1];

    const pathToCurrentFile = path.resolve(process.cwd(), currFile);
    const pathToDestination = path.resolve(destination, currFile);

    try {
        const rs = createReadStream(pathToCurrentFile);
        const ws = createWriteStream(pathToDestination);
        await pipeline(rs, ws);
        
  } catch (error) {
        console.error('Operation failed');
        console.log(error);
    } finally {
        fs.promises.rm(pathToCurrentFile);
    console.info(`You are currently in ${process.cwd()}`);
  }
}
