import path from 'path';
import fs from 'fs';

export default async function Cat(input) {
  const editedPath = input.replace('cat', '').trim();
  const currPath = process.cwd();

  let result = '';

  try {
    if (editedPath.length) {
      const destinationPath = path.resolve(currPath, editedPath);

      const readStream = fs.createReadStream(destinationPath);
      readStream.on('data', (chunk) => {
        result += chunk.toString();
      });

      readStream.on('end', () => {
        console.log(result);
      });
    } else {
      console.log('Invalid input');
    }
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
