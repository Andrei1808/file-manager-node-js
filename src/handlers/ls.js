import process from 'process';
import fs from 'fs/promises';
import path from 'path';

export default async function Ls() {
  try {
    const filesInDirrectory = await fs.readdir(process.cwd());
    const filesData = await Promise.all(
      filesInDirrectory.map(async (file) => {
        const pathToFile = path.join(process.cwd(), file);
        try {
          const fileStats = await fs.stat(pathToFile);
          return {
            Name: file,
            Type: fileStats.isDirectory() ? 'directory' : 'file',
          };
        } catch (err) {
          console.error('Operation failed 1');
          return null;
        }
      })
    );
    const filteredFilesData = filesData.filter(Boolean);
    console.table(filteredFilesData);
  } catch (error) {
    console.error('Operation failed');
    console.log(error);
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
