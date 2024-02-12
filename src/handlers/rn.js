import process from 'process';
import path from 'path';
import fs from 'fs';

export default async function Rn(input) {
  const files = input.replace('rn', '').trim();
  const currPath = process.cwd();

  const filesArray = files.split(' ');

  if (filesArray.length !== 2) console.error('Invalid input!');

  try {
    const currentlyFile = path.join(currPath, filesArray[0]);
    const createdFile = path.join(currPath, filesArray[1]);
    fs.promises.rename(currentlyFile, createdFile);
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
