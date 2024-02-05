import process from 'process';
import path from 'path';
import fs from 'fs';

export default async function Add(input) {
  const fileName = input.replace('add ', '');
  const currPath = process.cwd();

   
  try {
    if (fileName.length){
    const filePath = path.join(currPath, fileName);
      fs.promises.writeFile(filePath, '')
    } else {
      console.error('Invalid input!');
    }
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
