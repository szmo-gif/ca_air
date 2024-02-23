//parcing
const getIndex = () => {
  return process.argv.indexOf('fusion');
}

const getFirstArray = (index) => {
  return process.argv.slice(2, index);
}

const getSecondArray = (index) => {
  return process.argv.slice(index + 1);
}

//principal function
const fusion = (firstArray, secondArray) => {
  const newArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    newArray.push(firstArray[i]);
  }

  for (let j = 0; j < secondArray.length; j++) {
    newArray.push(secondArray[j]);
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

const isNotIndex = (index) => {
  if (index === -1) {
    return true;
  }
  return false;
}

//start function
const startFunction = () => {
  const index = getIndex();
  if (isNotIndex(index)) {
    return console.log("Erreur : veuillez écrire l'index 'fusion'");
  }

  const firstArray = getFirstArray(index);
  if (isNotArguments(firstArray)) {
    return console.log("Erreur : veuillez écrire deux tableau séparer par l'index fusion");
  }

  const secondArray = getSecondArray(index);
  const fusionResult = fusion(firstArray, secondArray);

  console.log(fusionResult.sort().join(' '));
}

startFunction()