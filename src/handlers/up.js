import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));


export default async function Up() {  
    try {
       process.chdir('..')
        console.info(`You are currently in ${process.cwd()}`);
      } catch (error) {
        console.error('Operation failed')
      }
}
  