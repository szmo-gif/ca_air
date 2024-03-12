// Parsing
const getArgument = () => {
  const args = process.argv.slice(2);
  const text = args.slice(0, -1).join(' ');
  const separator = args[args.length - 1];
  return { text, separator };
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
const isNotArguments = (argument) => {
  if (!argument.text || !argument.separator) {
    console.log("Erreur : veuillez écrire une phrase et un séparateur");
    return true;
  }
  return false;
}

// Applying the function
const displayTargetSplitArgument = () => {
  const { text, separator } = getArgument();
  if (isNotArguments({ text, separator })) {
    return;
  }
  const principalFunction = targetSplit(text, separator);
  return console.log(principalFunction.join('\n'));
}

displayTargetSplitArgument();