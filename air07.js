// parcing
const getArgument = () => {
  return process.argv.slice(2, -1);
}

const getNewElement = () => {
  return process.argv.slice(-1);
}

// principal function
const Insert = (array, newElement) => {
  const newArray = [];
  let inserted = false; // Variable pour suivre si le nouvel élément a été inséré

  for (let i = 0; i < array.length; i++) {
    if (parseInt(newElement) < parseInt(array[i]) && !inserted) {
      newArray.push(newElement); // Insérer le nouvel élément
      inserted = true; // Mettre à jour le statut d'insertion
    }
    newArray.push(array[i]); // Ajouter l'élément actuel du tableau
  }

  if (!inserted) {
    newArray.push(newElement); // Si le nouvel élément est le plus grand, l'ajouter à la fin
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

const isNotSorted = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return true;
    }
  }
  return false;
}

//start function
const inserNewElement = () => {
  const argument = getArgument();
  const newElement = getNewElement();

  if (isNotArguments(argument)) {
    return console.log("Erreur : veuillez insérer des nombres trié");
  }

  if(isNotSorted(argument)) {
    return console.log("Erreur : le tableau n'est pas trié");
  }

  const startprincipalFunction = Insert(argument, newElement);
  console.log(startprincipalFunction.join(" "));
}

inserNewElement()
