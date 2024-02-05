import path from 'path';
import process from 'process';

export default async function Cd(folderPath) {
  const editedPath = folderPath.replace('cd', '').trim();
  const currPath = process.cwd();
  const destinationPath = path.resolve(currPath, editedPath);

  try {
    if (editedPath.length) {
      process.chdir(destinationPath);
    }else {
      console.log('Invalid input');
    }
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
