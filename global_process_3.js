const grable = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag]
}

const greeting = grable('--greeting');
const name = grable('--name');

console.log(`${greeting} ${name}`);
