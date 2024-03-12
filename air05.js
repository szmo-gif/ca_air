//parcing
const getArgument = () => {
  return process.argv.slice(2);
};

const getOperator = (argument) => {
  return parseInt(argument[argument.length - 1]);
}
//principal function
const onEachOfThem = (argument, opérateur) => {
  let result = [];
  for (let i = 0; i < argument.length - 1; i++) {
    result.push(parseInt(argument[i]) + opérateur);
  }
  return result
}

//handle error
const validArgument = (argument) => {
  if (argument.length > 0) {
    return true;
  }
  console.log("Erreur : veuillez insérer des arguments");
  return false;
};

const argumentIsNumber = (argument) => {
  if (Number.isInteger(parseInt(argument))) {
    return true;
  }
  console.log("Erreur : veuillez insérer des nombres");
}

const validOperator = (operator) => {
  const regex = /^[+-]?\d+$/;
  if (regex.test(operator)) {
    return true;
  }
  console.log("Erreur : veuillez insérer un opérateur");
  return false;
};

//apply function
const displayonEachofThem = () => {
  const argument = getArgument();
  if (!validArgument(argument)) {
    return;
  }

  if (!argumentIsNumber(argument)) {
    return;
  }

  const operator = getOperator(argument);
  if (!validOperator(operator)) {
    return;
  }
  const principalFunction = onEachOfThem(argument, operator);
  return console.log(principalFunction.join(" "));
};

displayonEachofThem()