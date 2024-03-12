//parcing
const getArgument = () => {
  return process.argv.slice(2);
}

//principal function
const countOfOccurrence = (array) => {
  const numberCount = [];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (numberCount[num]) {
      numberCount[num]++;
    } else {
      numberCount[num] = 1;
    }
  }
  return numberCount
}

const lookForTheIntruder = (numberCount) => {
  const numbersWithoutPair = [];
  for (const num in numberCount) {
    if (numberCount[num] === 1) {
      numbersWithoutPair.push(num);
    }
  }
  return numbersWithoutPair
}


//handle error 
const validArgument = (argument) => {
  if (argument.length > 0) {
    return true;
  }
  console.log("Erreur : veuillez écrire des arguments pairs et 1 impairs");
  return false;
}

// apply function
const displayLookForTheIntruder = () => {
  const argument = getArgument();
  if (!validArgument(argument)) {
    return;
  }

  const occurenceCount = countOfOccurrence(argument);
  const principalFunction = lookForTheIntruder(occurenceCount);

  return console.log(principalFunction.join(" "));
}

displayLookForTheIntruder();

