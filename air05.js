//parcing
const getArgument = () => {
  return process.argv.slice(2);
};

//principal function
const onEachOfThem = (argument) => {
  const isLastElement = argument.length - 1;
  const getOperator = parseInt(argument[isLastElement]);
  let result = [];
  for (let i = 0; i < argument.length - 1; i++) {
    result.push(parseInt(argument[i]) + getOperator);
    
  }
  return result
}

//handle error
const isNotArguments = (argument) => {
  if (!argument.length) {
    return true;
  }
  return false;
};

const notOperator = (argument) => {
  const lastElement = argument[argument.length - 1];
  const operators = ["+", "-"];
  if (!operators.includes(lastElement.charAt(0))) {
    return true;
  }
  return false;
};

//apply function
const displayonEachofThem = () => {
  const argument = getArgument();
  if (isNotArguments(argument)) {
    return console.log("Erreur : veuillez insérer des nombre et un opérateur");
  }
  if (notOperator(argument)) {
    return console.log("Erreur : veuillez insérer un opérateur");
  }
  const principalFunction = onEachOfThem(argument);
  return console.log(principalFunction.join(" "));
};

displayonEachofThem()