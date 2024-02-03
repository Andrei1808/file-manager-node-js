import path from 'path';
import process from 'process';

export default async function Cd(folderPath) {
  const editedPath = folderPath.replace('cd', '').trim();
  const currPath = process.cwd();
  const destinationPath = path.resolve(currPath, editedPath);

  try {
    process.chdir(destinationPath);
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
