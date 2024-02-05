import process from 'process';
import path from 'path';
import { createReadStream, createWriteStream, promises } from 'fs';
import { pipeline } from 'stream/promises';

export default async function Cp(input) {
  const files = input.replace('cp', '').trim();
  const inputArray = files.split(' ');
  if (inputArray.length !== 2) console.error('Invalid input!');

  const currFile = inputArray[0];
  const destination = inputArray[1];



  try {
    const pathToCurrentFile = path.resolve(process.cwd(), currFile);
    const pathToDestination = path.resolve(destination, currFile);
  
    const rs = createReadStream(pathToCurrentFile);
    const ws = createWriteStream(pathToDestination);
    await pipeline(rs, ws);
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
