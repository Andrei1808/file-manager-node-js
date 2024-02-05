import process from 'process';
import path from 'path';
import fs, { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

export default async function Mv(input) {
  const files = input.replace('mv', '').trim();
  const inputArray = files.split(' ');

  const currFile = inputArray[0];
  const destination = inputArray[1];

  if (inputArray.length !== 2) console.error('Invalid input!');
console.log(inputArray.length);

  try {
    const pathToCurrentFile = path.resolve(process.cwd(), currFile);
    const pathToDestination = path.resolve(destination, currFile);
  
    const rs = createReadStream(pathToCurrentFile);
    const ws = createWriteStream(pathToDestination);
    await pipeline(rs, ws);
  } catch (error) {
    console.error('Operation failed');
  } finally {
    if (inputArray.length === 2){
    fs.promises.rm(pathToCurrentFile);}
    console.info(`You are currently in ${process.cwd()}`);
  }
}
