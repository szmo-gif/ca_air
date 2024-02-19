//parcing
const getArgument = () => {
    const getUser = process.argv.slice(2);
    const joinUser = getUser.join(" ");
    const splitUser = joinUser.split('')
    return splitUser
} 

//principal function
const onlyOne = (splitUser) => {
    let result = "";
    for (let i = 0; i < splitUser.length; i++) {
        if (splitUser[i] !== splitUser[i + 1]) {
            result += splitUser[i]
        }
    }
    return result
}

//handle error 
const isNotArguments = () => {
    const argument = getArgument();
    if (!argument.length) {
        console.log("Erreur : veuillez écrire une chaine de caractère.");
        return true;
    }
    return false;
}

// apply function
const applyFunction = () => {
    if (isNotArguments()) {
        return;
    }

    const argument = getArgument()
    const applyFunction = onlyOne(argument)

    console.log(applyFunction);
};

applyFunction()