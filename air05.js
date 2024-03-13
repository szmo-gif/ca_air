// Parsing des arguments
const getArgument = () => {
  return process.argv.slice(2);
};

// Récupération de l'opérateur
const getOperator = (argument) => {
  return argument[argument.length - 1];
};

// Fonction principale
const onEachOfThem = (argument, operateur) => {
  let result = [];
  for (let i = 0; i < argument.length - 1; i++) {
    result.push(parseInt(argument[i]) + parseInt(operateur));
  }
  return result;
};

// Validation des arguments
const validArgument = (argument) => {
  if (argument.length > 0) {
    return true;
  }
  console.log("Erreur : veuillez insérer des arguments");
  return false;
};

// Validation des nombres dans les arguments
const argumentIsNumber = (argument) => {
  for (let i = 0; i < argument.length -1; i++) {
    if (!isNaN(argument[i])) {
      return true;
    }
  }
  console.log("Erreur : veuillez insérer des nombres valides");
  return false;
};

// Validation de l'opérateur
const validOperator = (operator) => {
  const regex = /^[+-]\d+$/;
  if (regex.test(operator)) {
    return true;
  }
  console.log("Erreur : veuillez insérer un opérateur valide");
  return false;
};


// Application de la fonction principale
const displayOnEachOfThem = () => {
  const argument = getArgument();
  if (!validArgument(argument) || !argumentIsNumber(argument)) {
    return;
  }

  const operateur = getOperator(argument);
  if (!validOperator(operateur)) {
    return;
  }

  const resultat = onEachOfThem(argument, operateur);
  console.log(resultat.join(" "));
};

displayOnEachOfThem();
