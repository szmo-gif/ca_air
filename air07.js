const getArgument = () => {
  return process.argv.slice(2);
}

// Récupérer le nouvel élément à insérer
const getNewElement = (argument) => {
  return argument.pop(); 
}

// Fonction principale
const insert = (array, newElement) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (newElement < array[i]) {
      newArray.push(newElement);
      newArray.push(...array.slice(i));
      return newArray;
    }
    newArray.push(array[i]);
  }

  newArray.push(newElement);

  return newArray;
}
const validArguments = (argument) => {
  if (argument.length > 0) {
    return true;
  }
  return false;
}

const isNumber = (argument) => {
  for (let i = 0; i < argument.length; i++) {
    if (isNaN(argument[i])) {
      return false;
    }
  }
  return true;
}

const isSorted = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if ((array[i]) > (array[i + 1])) {
      return false;
    }
  }
  return true;
}

const insertNewElement = () => {
  const argument = getArgument();

  if (!validArguments(argument)) {
    return console.log("Erreur : Veuillez insérer des nombres triés.");
  }

  if (!isNumber(argument)) {
    return console.log("Erreur : Veuillez insérer des nombres valides.");
  }
  
  const newElement = getNewElement(argument); 

  if (!isSorted(argument)) {
    return console.log("Erreur : Le tableau n'est pas trié.");
  }

  const result = insert(argument, newElement);

  console.log(result.join(" "));
}

insertNewElement();