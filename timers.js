const waitingTime = 5000;

process.stdout.write(`Setting Time is ${waitingTime/1000} seconds to withstand`);

TerminateMsg = () => console.log('\nTime Out Done');

setTimeout(TerminateMsg,waitingTime);