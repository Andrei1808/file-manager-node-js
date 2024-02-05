import os from 'os';
const { EOL, cpus, homedir, userInfo, arch } = os;

const osConstants = {
    '--EOL': JSON.stringify(EOL),
    '--cpus': cpus(),
    '--homedir': homedir(),
    '--username': userInfo().username,
    '--architecture': arch(),
  };
  
  export default osConstants;