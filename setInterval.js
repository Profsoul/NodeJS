const WaitingTime = 5000;
const DelayTime = 500;
let startTime = 0;

process.stdout.write(`Time is SET for ${WaitingTime/1000}  seconds\n`);

msg = ()=>{
startTime += DelayTime;
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write(` ${Math.floor(startTime/WaitingTime *100)}%...`);
}

Delay  = () => {
    process.stdout.clearLine();
process.stdout.cursorTo(0);
    console.log(`Time Over`)
clearInterval(interval);

}
setTimeout(Delay,WaitingTime);

let interval = setInterval(msg,DelayTime)