//parcing
const getArgument = () => {
    return process.argv.slice(2);
}

// principal function 
const targetSplit = () => {
    const userArray = getArgument()
    const lastCaratere = userArray[userArray.length - 1];
    const beforeSplit = [];
    const afterSplit = []

    for (let i = 0; i < userArray.length - 1; i++) {
        if (userArray[i] === lastCaratere) {
            if (i > 0) {
                beforeSplit.push(userArray.slice(0, i).join(' '));
            }
            if (i < userArray.length - 1) {
                afterSplit.push(userArray.slice(i + 1, userArray.length - 1).join(' '));
            }
        }
    }

    return [
        beforeSplit.join(' '), afterSplit.join(' ')
    ]
}

//apply function
const applyFunction = () => {
    const arguments = getArgument();
    const principalFunction = targetSplit(arguments)

    console.log(principalFunction.join('\n'));
}

applyFunction()