// Parsing
const getArgument = () => {
  return process.argv.slice(2);
}

// Main function
const targetSplit = (text, separator) => {
  const words = text.split(' ');
  let result = [];
  let currentPhrase = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === separator) {
      result.push(currentPhrase.join(' '));
      currentPhrase = [];
    } else {
      currentPhrase.push(words[i]);
    }
  }

  result.push(currentPhrase.join(' '));

  return result;
}

// Error handling
const validArgument = (argument) => {
  if (argument.length === 2) {
    return true;
  }
  console.log("Erreur : veuillez écrire une phrase et un séparateur");
  return false;
}

// Applying the function
const displayTargetSplitArgument = () => {
  const args = getArgument();
  if (!validArgument(args)) {
    return;
  }

  const text = args.slice(0, -1).join(' ');
  const separator = args[args.length - 1];
  const split = targetSplit(text, separator);
  return console.log(split.join('\n'));
}

displayTargetSplitArgument();