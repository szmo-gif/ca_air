//parcing
const getArray = () => {
  return process.argv.slice(2);
}

const splitArgument = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'fusion') {
      return i;
    } 
  }
  return -1;
}

const isFirstArray = (array) => {
  return array.slice(0, splitArgument(array));
}

const isSecondArray = (array) => {
  return array.slice(splitArgument(array) + 1);
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
const isIndex = (index) => {
  if (index === -1) {
    return false;
  }
  return true;
}

const isSorted = (array) => {

  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      return false;
    }
  }
  return true;
}

//start function
const displayFusionArray = () => {
  const array = getArray();
  const index = splitArgument(array);
  if (!isIndex(index)) {
    return console.log("Erreur : veuillez écrire l'index 'fusion'");
  }

  const firstArray = isFirstArray(array);
  const secondArray = isSecondArray(array);
  if (!isSorted(firstArray) || !isSorted(secondArray)) {
    return console.log("Erreur : les tableaux ne sont pas triés");
  }

  const fusionResult = fusionArray(firstArray, secondArray);

  return console.log(fusionResult.join(' '));
}

displayFusionArray()