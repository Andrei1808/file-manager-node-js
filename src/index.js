import os from 'os'
import process from 'process'
import userName from './handlers/userName.js'
import { createInterface } from 'readline'

async function App() {
  process.chdir(os.homedir())
  console.info(`You are currently in ${process.cwd()}`)
  userName()

  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  })
}

App()
