import process from 'process';
import fs from 'fs';
import path from 'path';

export default async function Ls() {
  try {
    const filesInDirrectory = fs.readdirSync(process.cwd());
    const filteredFiles = filesInDirrectory.filter((file) => !file.startsWith('NTUSER') && !file.startsWith('ntuser')); //Filtered system "invisible" files

    const filesData = filteredFiles.map((file) => {
      const pathToFile = path.join(process.cwd(), file);
      const fileStats = fs.statSync(pathToFile);
      return {
        Name: file,
        Type: fileStats.isDirectory() ? 'directory' : 'file',
      };
    });

    console.table(filesData);
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
