// Parsing
const getArgument = () => {
  return process.argv.slice(2);
}

const joinArgument = (arguments) => {
  return arguments.join(" ");
}

const toLowerCaseArgument = (argument) => {
  return argument.toLowerCase();
}

const splitArgument = (argument) => {
  return argument.split(" ");
}

// Fonction principale
const healthPassCheck = (user, targets) => {
  let result = [];
  for (let i = 0; i < user.length; i++) {
    const word = user[i];
    let containsTarget = false;
    for (let j = 0; j < targets.length; j++) {
      if (word.includes(targets[j])) {
        containsTarget = true;
        break;
      }
    }
    if (!containsTarget) {
      result.push(word.charAt(0).toUpperCase() + word.slice(1)); // capitalize the first letter
    }
  }
  return result;
}

// Gestion des erreurs
const isNotArguments = (argument) => {
  if (!argument.length) {
    return true;
  }
  return false;
};

// Fonction de démarrage
const displayHealthPassCheck = () => {
  const arguments = getArgument();
  if (isNotArguments(arguments)) {
    return console.log("Erreur : veuillez insérer des mots et une cible");
  }

  const targets = arguments.pop().split(""); // Remove and get the targets
  const joinedArgument = joinArgument(arguments);
  const lowerCaseArgument = toLowerCaseArgument(joinedArgument);
  const splitArgumentsResult = splitArgument(lowerCaseArgument);

  const principalFunction = healthPassCheck(splitArgumentsResult, targets);
  return console.log(principalFunction.join(" "));
}

displayHealthPassCheck();
