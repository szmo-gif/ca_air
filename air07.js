// parcing
const getArgument = () => {
  return process.argv.slice(2, -1);
}

const getNewElement = () => {
  return process.argv.slice(-1);
}

// principal function
const Insert = (array, newElement) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i])
  }

  for (let j = 0; j < newElement.length; j++) {
    newArray.push(newElement[j])
  }

  return newArray
}

//handle error
const isNotArguments = (argument) => {
  if (!argument.length) {
    return true;
  }
  return false;
}

const isNotNewElement = (newElement) => {
  if (!newElement.length) {
    return true;
  }
  return false;
}

//start function
const startFunction = () => {
  const argument = getArgument();
  const newElement = getNewElement();
  if (isNotArguments(argument)) {
    return console.log("Erreur : veuillez insérer des nombres trié");
  }

  if(isNotNewElement(newElement)) {
    return console.log("Erreur : veuillez insérer un nombre à insérer dans le premier tableau");
  }

  const startprincipalFunction = Insert(argument, newElement);
  console.log(startprincipalFunction.sort().join(" "));
}

startFunction()
