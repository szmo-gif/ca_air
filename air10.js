//parcing
const getArgument = () => {
  return process.argv.slice(2);
}

//principal function
const ShowContent = (argument) => {
  for (let i = 0; i < argument.length; i++) {
    return argument[i]
    }
  }

  const readFile = (fileName) => {
    const fs = require('fs');
    if (!fs.existsSync(fileName)) {
      return null
    }
    else{
      return fs.readFileSync(fileName, 'utf8')
    }
    
  }

//handle error 
const isArgument = (argument) => {
  if (argument.length > 0) {
    return true;
  }
  console.log("Erreur : veuillez écrire un nom de fichier");
  return false;
}

const validFile = (argument) => {
  if (argument !== null) {
    return true;
  }
  console.log("Erreur : problème lors de la récupération de fichier");
  return false;
}


// main
const displayReadFile = () => {
  const argument = getArgument();
  if (!isArgument(argument)) {
    return;
  }

  const showFile = ShowContent(argument);

  const readArgument = readFile(showFile);
  if (!validFile(readArgument)) {
    return
  }

  return console.log(readArgument);
}

displayReadFile()