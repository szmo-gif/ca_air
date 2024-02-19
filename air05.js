const user = process.argv.slice(2);

let result =[];
for (let i = 0; i < user.length - 1; i++) {
    if (user.length - 1 !== user[i]) {
        result.push(user[i]);
    }
}

console.log(result);