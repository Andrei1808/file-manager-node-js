import os from 'os';
import process from 'process';
import { argv } from 'process';
import { createInterface } from 'readline';
import userName from './handlers/userName.js';
import { read } from 'fs';

async function App() {
  process.chdir(os.homedir());
   console.info(`You are currently in ${process.cwd()}`);
   
  const user = argv[argv.length - 1].replace('--username=', '').trim();
  userName(user);

  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
   

  readline
     .on('SIGINT', () => readline.close())
     .on('line', (input) => {
      if(input === '.exit') readline.close()
    })
    .on('close', () => {
      console.log(`Thank you for using File Manager, ${user}!`);
    });
}

App();
