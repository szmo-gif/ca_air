// Parsing des arguments
const getArguments = () => {
    return process.argv.slice(2);
}

// Fonction principale pour diviser la chaîne
const split = (splitString, separator) => {
    let resultString = "";
    let currentWord = "";
    
    for (let i = 0; i < splitString.length; i++) {
        let currentCharacter = splitString[i];

        if (currentCharacter !== separator) {
            currentWord += currentCharacter;
        } else {
            resultString += currentWord + '\n'; // Ajoute le mot actuel avec un saut de ligne
            currentWord = "";
        }
    }
    
    // Ajouter le dernier mot
    if (currentWord !== "") {
        resultString += currentWord;
    }

    return resultString;
}

// Gestion de l'erreur si aucun argument n'est fourni
const validArgument = (argument) => {
    if (argument.length === 1) {
        return true;
    }
    console.log("Erreur : veuillez écrire plusieurs arguments.");
    return false;
}

// Application de la fonction
const displaySplitArgument = () => {
    const arguments = getArguments();
    const separator = ' ' || '\n' || '\t'; 
    if (!validArgument(arguments)) {
        return;
    }
    const resultString = split(arguments.join(''), separator);

    console.log(resultString);
}

displaySplitArgument();
