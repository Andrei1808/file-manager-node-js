import process from 'process';
import path from 'path';
import fs from 'fs';

export default async function Add(input) {
  const fileName = input.replace('add', '').trim();
  const currPath = process.cwd();
  const filePath = path.join(currPath, fileName);

  try {
    fs.promises.writeFile(filePath, '');
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
