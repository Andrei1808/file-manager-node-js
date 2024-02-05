import process from 'process';
import path from 'path';

export default async function Hash(input) {
  const files = input.replace('hash', '').trim();
  const inputArray = files.split(' ');

  const currFile = inputArray[0];
  const pathToCurrentFile = path.resolve(process.cwd(), currFile);

  try {

  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
