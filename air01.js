// Parcing
const getArgument = () => {
    return process.argv.slice(2);
}

// Fonction principale 
const targetSplit = (userArray) => {
    const separator = userArray[userArray.length - 1];
    let result = [];
    let currentPhrase = [];

    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i] === separator) {
            result.push(currentPhrase.join(' ')); // Joindre les éléments pour former la phrase
            currentPhrase = []; // Réinitialiser la phrase courante
        } else {
            currentPhrase.push(userArray[i]); // Ajouter l'élément à la phrase courante
        }
    }

    result.push(currentPhrase.join(' ')); // Ajouter la dernière phrase après la dernière occurrence du séparateur

    return result;
}
//handle error 
const isNotArguments = (argument) => {
    if (!argument.length) {
        console.log("Erreur : veuillez écrire des arguments dont le dernier est le séparateur");
        return true;
    }
    return false;
}

// apply function
const displayTargetSplitArgument = () => {
    const userArray = getArgument();
    if (isNotArguments(userArray)) {
        return;
    }
    const principalFunction = targetSplit(userArray);
    return console.log(principalFunction.join('\n'));
}

displayTargetSplitArgument();
