import os from 'os';
import { chdir, cwd } from 'process';
import userName from './handlers/userName.js';




 async function App() {
chdir(os.homedir());
    console.info(`You are currently in ${cwd()}`);
    
    userName()
    
}
  
App();