import os from 'os';
import process from 'process';
import { argv } from 'process';
import { createInterface } from 'readline';
import userName from './handlers/userName.js';
import EventEmitter from 'events';
import up from './handlers/up.js';
import cd from './handlers/cd.js';
import ls from './handlers/ls.js';
import cat from './handlers/cat.js';

async function App() {
  process.chdir(os.homedir());
  console.info(`You are currently in ${process.cwd()}`);

  let user = '';

  if (argv.length > 2 && argv[argv.length - 1] !== '--username=') {
    user = argv[argv.length - 1].replace('--username=', '').trim();
  } else {
    user = 'my friend';
  }

  userName(user);

  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline
    .on('SIGINT', () => readline.close())
    .on('line', (input) => {
      if (input.trim === '.exit') {
        readline.close();
      } else if (input === 'up') {
        eventEmitter.emit('up');
      } else if (input.includes('cd ')) {
        eventEmitter.emit('cd', input);
      } else if (input === 'ls') {
        eventEmitter.emit('ls');
      } else if (input.includes('cat ')) {
        eventEmitter.emit('cat', input);
      }
    })
    .on('close', () => {
      console.log(`Thank you for using File Manager, ${user}!`);
    });

  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(0);

  eventEmitter.on('up', up).on('cd', cd).on('ls', ls).on('cat', cat);
}

App();
