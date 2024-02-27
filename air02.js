//parcing
const getArgument = () => {
    return process.argv.slice(2);
}

//principal function
const joinArgument = (argument) => {
    let join = "";
    for (let i = 0; i < argument.length; i++) {
        join += argument[i];
        if (i < argument.length) {
            join += " ";
        }
    }
    return join
}

//handle error 
const isNotArguments = () => {
    const argument = getArgument();
    if (!argument.length) {
        console.log("Erreur : veuillez écrire des arguments dont le dernier est le séparateur");
        return true;
    }
    return false;
}

// apply function
const displayJoinArgument = () => {
    if (isNotArguments()) {
        return;
    }
    const argument = getArgument();
    const principalFunction = joinArgument(argument);

    return console.log(principalFunction);
}

displayJoinArgument();