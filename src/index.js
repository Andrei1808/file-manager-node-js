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
import add from './handlers/add.js';
import rn from './handlers/rn.js';
import cp from './handlers/cp.js';
import mv from './handlers/mv.js';
import rm from './handlers/rm.js';

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
      if (input === '.exit') {
        readline.close();
      } else if (input === 'up') {
        eventEmitter.emit('up');
      } else if (input.startsWith('cd ')) {
        eventEmitter.emit('cd', input);
      } else if (input === 'ls') {
        eventEmitter.emit('ls');
      } else if (input.startsWith('cat ')) {
        eventEmitter.emit('cat', input);
      } else if (input.startsWith('add ')) {
        eventEmitter.emit('add', input);
      } else if (input.startsWith('rn ')) {
        eventEmitter.emit('rn', input);
      } else if (input.startsWith('cp ')) {
        eventEmitter.emit('cp', input);
      } else if (input.startsWith('mv ')) {
        eventEmitter.emit('mv', input);
      } else if (input.startsWith('rm ')) {
        eventEmitter.emit('rm', input);
      }
    })
    .on('close', () => {
      console.log(`Thank you for using File Manager, ${user}!`);
    });

  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(0);

  eventEmitter
    .on('up', up)
    .on('cd', cd)
    .on('ls', ls)
    .on('cat', cat)
    .on('add', add)
    .on('rn', rn)
    .on('cp', cp)
    .on('mv', mv)
    .on('rm', rm);
}

App();
