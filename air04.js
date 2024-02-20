//parcing
const getArgument = () => {
    return process.argv.slice(2);
}

const joinUser = (argument) => {
  return argument.join(" ");
}
const splitUser = (argumentJoin) => {
  return  argumentJoin.split('');
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

  const argument = splitUser(joinUser(getArgument()));
  const applyFunction = onlyOne(argument)

  console.log(applyFunction);
};

applyFunction()