import process from 'process';
import path from 'path';
import fs from 'fs';

export default async function Rm(input) {
  const files = input.replace('rm', '').trim();
  const inputArray = files.split(' ');
  const filesInDirrectory = await fs.promises.readdir(process.cwd());

  const currFile = inputArray[0];

  const isFileInDirrectory = filesInDirrectory.filter((i) => {
    return i.startsWith(currFile);
  });

  const pathToCurrentFile = path.resolve(process.cwd(), isFileInDirrectory[0]);
  const fileStats = await fs.promises.stat(pathToCurrentFile);

  try {
    if (fileStats.isFile()) {
      await fs.promises.unlink(pathToCurrentFile);
    }
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
