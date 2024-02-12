import process from 'process';

export default async function Up() {
  try {
    process.chdir('..');
  } catch (error) {
    console.error('Operation failed');
  } finally {
    console.info(`You are currently in ${process.cwd()}`);
  }
}
