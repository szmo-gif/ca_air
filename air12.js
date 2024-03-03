//parcing
const getArgument = () => {
  return process.argv.slice(2);
}

//principal function
const swap = (user, i, j) => {
  const temp = user[i];
  user[i] = user[j];
  user[j] = temp;
  return user
}

const partionArray = (low, high, array) => {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
}

const quickSort = (low, high, array) => {
  if (low < high) {
    let newPivot = partionArray(low, high, array);
    quickSort(low, newPivot - 1, array);
    quickSort(newPivot + 1, high, array);
  }
  return array;
}

//handle error
const isNotArgument = (argument) => {
  if (!argument.length) {
    console.log("Erreur : veuillez écrire des nombres");
    return true;
  }
  return false;
}

const isNotNumber = (number) => {
  if (isNaN(number)) {
    console.log("Erreur : veuillez écrire des nombre");
    return true;
  }
  return false;
}

//main
const displayquickSort = () => {
  const argument = getArgument();
  if (isNotArgument(argument)) {
    return;
  }

  if (isNotNumber(argument[0])) {
    return;
  }
  // Convertir les arguments en nombres
  const numbers = argument.map(Number);

  const sort = quickSort(0, numbers.length - 1, numbers);
  console.log(sort.join(" "));
}


displayquickSort()