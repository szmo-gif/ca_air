// Parsing des arguments
const getArgument = () => {
  return process.argv.slice(2);
}

// Fonction de permutation
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array; // Modification pour renvoyer le tableau modifié
}

// Partitionnement d'un tableau
const partionArray = (low, high, array) => {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
}

// Tri rapide (QuickSort)
const quickSort = (low, high, array) => {
  if (low < high) {
    let newPivot = partionArray(low, high, array);
    quickSort(low, newPivot - 1, array);
    quickSort(newPivot + 1, high, array);
  }
  return array;
}

// Validation des arguments
const isArgument = (argument) => {
  if (argument.length > 0) {
    return true;
  }
  console.log("Erreur : veuillez écrire des nombres");
  return false;
}

// Validation d'un nombre
const isNumber = (number) => {
  if (!isNaN(number)) {
    return true;
  }
  return false;
}

// Validation d'un tableau de nombres
const areNumbers = (array) => {
  for (let number of array) {
    if (!isNumber(number)) {
      console.log("Erreur : veuillez écrire des nombres");
      return false;
    }
  }
  return true;
}

// Fonction principale
const displayquickSort = () => {
  const argument = getArgument();
  if (!isArgument(argument)) {
    return;
  }

  const numbers = [];
  for (let i = 0; i < argument.length; i++) {
    numbers.push(parseInt(argument[i]));
  }
  if (!areNumbers(numbers)) {
    return;
  }

  const sort = quickSort(0, numbers.length - 1, numbers);
  console.log(sort.join(" "));
}

// Appel de la fonction principale
displayquickSort();
