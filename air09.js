// Parcing
const getArgument = () => {
  return process.argv.slice(2);
}

// principal function
const isRotationArgument = (argument) => {
  const newArray = [];
  for (let i = 0; i < argument.length; i++) {
    newArray.push(argument[(i + 1) % argument.length]); // Utilisez le modulo pour créer une boucle circulaire
  }
  return newArray;
}

//handle error
const isNotArguments = (argument) => {
  if (!argument.length) {
    return true;
  }
  return false;
}

//starting function
const displayRotationArgument = () => {
  const argument = getArgument();
  if (isNotArguments(argument)) {
    return console.log("Erreur : veuillez insérer des arguments");
  }

  const rotation = isRotationArgument(argument);

  console.log(rotation.join(" "));
}

displayRotationArgument()