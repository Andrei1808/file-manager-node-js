import process from 'process';
import osConstants from '../helpers/constants.js'
import { cpus } from 'os'

export default async function Os(input) {
    const files = input.replace('os', '').trim();
    const inputArray = files.split(' ');
    const inputArgument = inputArray[0];
    const validInputArguments = Object.keys(osConstants);


    try {
        if (!validInputArguments.includes(inputArgument)) throw new Error(`Invalid argument`);
        
        if (inputArgument === '--EOL') {
            console.log(Object.values(osConstants['--EOL']));
        }
        if (inputArgument === '--cpus') {
            const cpusInfo = cpus().map(({ model, speed }) => {
                speed = `${speed / 1000}GHz`;
                return { model, speed };
              });
            console.log(cpusInfo);
        }
        if (inputArgument === '--homedir') {
            console.log(Object.values(osConstants['--homedir']).join(''));
        }
        if (inputArgument === '--username') {
            console.log(Object.values(osConstants['--username']).join(''));
        }
        if (inputArgument === '--architecture') {
            console.log(Object.values(osConstants['--architecture']).join(''));
        }


  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
