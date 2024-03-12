//parcing
const getArgument = () => {
  return process.argv.slice(2);
}

//principal function
const joinArgument = (argument) => {
  let join = "";
  const concatenator = argument[argument.length - 1];

  for (let i = 0; i < argument.length - 1; i++) {
    join += argument[i];
    if (i < argument.length - 2) {
      join += concatenator;
    }
  }
  return join
}

//handle error 
const validArgument = () => {
  const argument = getArgument();
  if (argument.length > 0) {
    return true;
  }
  console.log("Erreur : veuillez écrire des arguments dont le dernier est le séparateur");
  return false;
}

// apply function
const displayJoinArgument = () => {
  if (!validArgument()) {
    return;
  }
  const argument = getArgument();
  const principalFunction = joinArgument(argument);

  return console.log(principalFunction);
}

displayJoinArgument();