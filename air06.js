//parcing
const getArgument = () => {
  return process.argv.slice(2);
}

const joinArgument = (arguments) => {
  return arguments.join(" ")
}

const toLowerCaseArgument = (argument) => {
  return argument.toLowerCase()
}

const splitArgument = (argument) => {
  return argument.split(" ")
}

//principal function
const HealthPassCheck = (user) => {
  const target = user[user.length - 1];

  let result = [];
  for (let i = 0; i < user.length - 1; i++) {
    const word = user[i];
    
    let containsTarget = false;
    for (let j = 0; j < word.length; j++) {
      if (target === word[j]) {
        containsTarget = true;
        break;
      }
    }
    if (!containsTarget) {
      result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  }
  return result;
}

//handle error
const isNotArguments = (argument) => {
  if (!argument.length) {
    return true;
  }
  return false;
};

//start function
const displayHealthPassCheck = () => {
  const arguments = getArgument();
  if (isNotArguments(arguments)) {
    return console.log("Erreur : veuillez insérer des nombre et un opérateur");
  }

  const joinedArgument = joinArgument(arguments);
  const LowerCaseArgument = toLowerCaseArgument(joinedArgument);
  const splitArgumentsResult = splitArgument(LowerCaseArgument);

  const principalFunction = HealthPassCheck(splitArgumentsResult);
  console.log(principalFunction.join(" "));
}

displayHealthPassCheck()