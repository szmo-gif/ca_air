//parcing
const getArgument = () => {
    return process.argv.slice(2);
}

//principal function
const split = (getArgument) => {

    let array = [];
    for (let i = 0; i < getArgument.length; i++) {
        let currentWord = getArgument[i];
        let wordWithoutSpaces = "";
        let wordStarted = false;

        for (let j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === " " || currentWord[j] === '\n' || currentWord[j] === '\t') {
                if (wordStarted) {
                    array.push(wordWithoutSpaces);
                    wordWithoutSpaces = "";
                }
            } else {
            wordWithoutSpaces += currentWord[j];
            wordStarted = true;
            }
        }

        if (wordWithoutSpaces !== " ") {
            array.push(wordWithoutSpaces);
        }
    }

    return array;
}

//apply function 
const applyFunction= () => {
    const arguments = getArgument();
    const principalFunction = split(arguments);

    console.log(principalFunction.join('\n'));
}

applyFunction();