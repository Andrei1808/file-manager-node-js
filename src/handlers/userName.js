import { argv } from 'process';

export default async function userName(name) {
  try {
    if (argv.length > 2 && name.length) {
      console.log(`Welcome to the File Manager, ${name}!`);
    } else {
      console.log(`Welcome to the File Manager,  ${name}!`);
    }
  } catch (err) {
    console.log(err);
  }
}
