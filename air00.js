const wordsArray = process.argv.slice(2);

console.log(wordsArray.join(" ")); 

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

    // Ajouter le dernier mot si le mot n'a pas d'espace à la fin
    if (wordWithoutSpaces !== "") {
        array.push(wordWithoutSpaces);
    }
}

console.log(array);
