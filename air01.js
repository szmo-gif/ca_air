const userArray = process.argv.slice(2);
const lastCaratere = userArray[userArray.length - 1];

let beforeSplit = [];
let afterSplit = [];

for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] === lastCaratere) {
        if (i > 0) {
            beforeSplit.push(userArray[i - 1]);
        }
        if (i < userArray.length - 1) {
            afterSplit.push(userArray[i + 1]);
        }
    }
}

console.log(userArray);
console.log(lastCaratere);
console.log(beforeSplit);
console.log(afterSplit);
