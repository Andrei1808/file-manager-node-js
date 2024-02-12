import process from 'process';
import path from 'path';
import { createHash } from 'crypto';
import fs from 'fs';

export default async function Hash(input) {
  const filename = input.replace('hash ', '').trim();

  try {
    if (filename.length) {
      const pathToCurrentFile = path.resolve(process.cwd(), filename);
      const hash = createHash('sha256');
      const readStream = fs.createReadStream(pathToCurrentFile);
      readStream.on('data', (chunk) => {
        hash.update(chunk);
      });

      readStream.on('end', () => {
        console.log(hash.digest('hex'));
      });
    } else {
      console.error('Invalid input!');
    }
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
