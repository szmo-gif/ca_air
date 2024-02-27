//parcing
const getArgument = () => {
    return process.argv.slice(2);
} 

//principal function
const lookForTheIntruder = (argument) => {
    const numberCount = [];

// Compter le nombre d'occurrences de chaque nombre
    for (let i = 0; i < argument.length; i++) {
        const num = argument[i];
        if (numberCount[num]) {
            numberCount[num]++;
        } else {
            numberCount[num] = 1;
        }
    }
// Isoler les nombres qui n'ont qu'une seule occurrence
    const numbersWithoutPair = [];
    for (const num in numberCount) {
        if (numberCount[num] === 1) {
            numbersWithoutPair.push(num);
        }
    }
    return numbersWithoutPair
}

//handle error 
const isNotArguments = () => {
    const argument = getArgument();
    if (!argument.length) {
        console.log("Erreur : veuillez écrire des arguments pairs et 1 impairs");
        return true;
    }
    return false;
}

// apply function
const displayLookForTheIntruder = () => {
    if (isNotArguments()) {
        return;
    }
    const argument = getArgument();
    const principalFunction = LookForTheIntruder(argument);

    return console.log(principalFunction.join(" "));
}

displayLookForTheIntruder();

