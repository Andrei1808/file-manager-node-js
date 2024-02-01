import { argv } from 'process';



export default async function userName() {
    const userName = argv[argv.length - 1].replace('--username=', '').trim();
    
    try {
        if (argv.length > 2 && userName.length) {
        console.log(`Welcome to the File Manager, ${userName}!`)
        } else {
            console.log(`Welcome to the File Manager, my friend!`)
    }
    } catch (err) {
        console.log(err)
}
  }