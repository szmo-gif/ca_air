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

//apply function 
const applyFunction = () => {
    const argument = getArgument();
    const principalFunction = joinArgument(argument);

    console.log(principalFunction);
}

applyFunction();