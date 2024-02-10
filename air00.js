const wordsArray = () => {
    return process.argv.slice(2);
}

const split = (wordsArray) => {

    let array = [];
    for (let i = 0; i < wordsArray.length; i++) {
        let currentWord = wordsArray[i];
        let wordWithoutSpaces = "";
        let wordStarted = false;

        for (let j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === " ") {
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

    return console.log(array.join('\n'));
}

const handleError = () => {
    if (!process.argv.slice(2).length) {
        console.log("Erreur : veuillez écrire une chaine de caractère");
        process.exit(1)
    }
}

handleError();
split(wordsArray());
