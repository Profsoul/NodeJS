const question  = [
    'what is your name ?',
    'What are you dong right now?',
    'What is your favorite programming Language ? '
]

const written = (index = 0)=>{
    process.stdout.write(`${question[index]}`);
    process.stdout.write(` > `);
}


written();

const answer = [];

process.stdin.on('data',value =>{
    answer.push(value.toString().trim());


if (answer.length < question.length){
    written(answer.length);
}
else{
    process.exit()
}});

process.on('exit',()=>{
    const [name,activity,lang] = answer;
    process.stdout.write(
        `\nWelcome ${name}. I Know you like to do ${activity} in ${lang}\n`
    )

});