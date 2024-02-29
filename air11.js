// Parcing
const getArgument = () => {
  return process.argv.slice(2);
}

// Principal function
const buildPyramid = (user) => {
  const character = user[0];
  const floor = user[1];
  const firstFloor = character + '\n';

  let currentWidth = character.length;
  let nextFloor = character.repeat(currentWidth + 2) + '\n';

  const pyramid = [];
  const pyramidWidth = (currentWidth + 2) * floor; // Largeur totale de la pyramide

  for (let i = 0; i < floor; i++) {
    if (i === 0) {
      const spaces = ' '.repeat((pyramidWidth - currentWidth) / 2); // Calculer les espaces pour centrer l'étage
      pyramid.push(spaces + firstFloor);
    }
    else {
      currentWidth += 2; // Augmenter la largeur pour le nouvel étage
      nextFloor = character.repeat(currentWidth) + '\n'; // Recalculer le nouvel étage
      const spaces = ' '.repeat((pyramidWidth - currentWidth) / 2);
      pyramid.push(spaces + nextFloor);
    }
  }
  return pyramid;
}

//handle error
const isNotArgument = (argument) => {
  if (!argument.length) {
    console.log("Erreur : veuillez écrire un caractère et nombre d'étages");
    return true;
  }
  return false;
}

const isNotFloor = (floor) => {
  if (!floor) {
    console.log("Erreur : le nombre d'étages doit être superieur à 0");
    return true;
  }
  return false;
}

// Main
const displayPyramid = () => {
  const argument = getArgument();

  if (isNotArgument(argument)) {
    return;
  }
  if (isNotFloor(argument[1])) {
    return;
  }

  console.log(buildPyramid(argument).join(''));
}

displayPyramid();
