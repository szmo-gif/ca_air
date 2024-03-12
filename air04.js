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
const validArgument = (argument) => {
  if (argument.length === 1) {
    return true;
  }
  console.log("Erreur : veuillez écrire une chaine de caractère.");
  return false;
}

// apply function
const displayOnlyOne = () => {
  const argument = getArgument();
  if (!validArgument(argument)) {
    return;
  }

  const splitArray = splitUser(joinUser(argument));
  const displayOnlyOne = onlyOne(splitArray);

  return console.log(displayOnlyOne);
};

displayOnlyOne()