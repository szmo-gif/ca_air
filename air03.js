const userArgument = process.argv.slice(2);

const result = [];
for (let i = 0; i < userArgument.length; i++) {
    if (userArgument.indexOf(userArgument[i]) === i) {
        result.push(userArgument[i]);
    }
}

console.log(result);