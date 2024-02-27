//parcing
const getArray = () => {
  return process.argv.slice(2);
}

//@TODO : CHANGE NAMING VARIABLE
const splitArgument = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'fusion') {
      return i;
    } 
  }
  return -1;
}

const isFirstArray = (array) => {
  return array.slice(0, isIndex(array));
}

const isSecondArray = (array) => {
  return array.slice(isIndex(array) + 1);
}

//principal function
const fusionArray = (firstArray, secondArray) => {
  const newArray = [];
  let i = 0;
  let j = 0;

  while (i <= firstArray.length && j <= secondArray.length) {
    if (firstArray[i] < secondArray[j]) {
      newArray.push(firstArray[i]);
      i++;
    } else {
      newArray.push(secondArray[j]);
      j++;
    }
  }

  return newArray;
}

//handle error
const isNotIndex = (index) => {
  if (index === -1) {
    return true;
  }
  return false;
}

const isNotSorted = (firstArray, secondArray) => {
  for (let i = 0; i <= firstArray.length; i++) {
    if (firstArray[i] > firstArray[i + 1]) {
      return true;
    }
  for (let j = 0; j < secondArray.length; j++) {
    if (secondArray[j] > secondArray[j + 1]) {
      return true;
    }
  }
  }
  return false;
}

//start function
//@TODO : CHANGE NAMING VARIABLE
const displayFusionArray = () => {
  const array = getArray();
  const index = splitArgument(array);
  if (isNotIndex(index)) {
    return console.log("Erreur : veuillez écrire l'index 'fusion'");
  }

  const firstArray = isFirstArray(array);
  const secondArray = isSecondArray(array);
  if (isNotSorted(firstArray, secondArray)) {
    return console.log("Erreur : les tableaux ne sont pas triés");
  }

  const fusionResult = fusionArray(firstArray, secondArray);

  return console.log(fusionResult.join(' '));
}

displayFusionArray()