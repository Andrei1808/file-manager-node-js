import process from 'process';
import path from 'path';
import { createHash } from 'crypto';
import fs from 'fs';

export default async function Hash(input) {
  const files = input.replace('hash', '').trim();
  const inputArray = files.split(' ');

  const currFile = inputArray[0];
  const pathToCurrentFile = path.resolve(process.cwd(), currFile);

  try {
    const hash = createHash('sha256');
    const readStream = fs.createReadStream(pathToCurrentFile);
    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      console.log(hash.digest('hex'));
    });
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
