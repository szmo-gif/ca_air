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
const isNotArgument = (argument) => {
  if (!argument.length) {
    console.log("Erreur : veuillez écrire un nom de fichier");
    return true;
  }
  return false;
}

const fileRecoveryError = (argument) => {
  if (argument === null) {
    console.log("Erreur : problème lors de la récupération de fichier");
    return true;
  }
  return false;
}


// main
const displayShowContent = () => {
  const argument = getArgument();
  if (isNotArgument(argument)) {
    return;
  }

  const showFile = ShowContent(argument);

  const readArgument = readFile(showFile);
  if (fileRecoveryError(readArgument)) {
    return
  }

  return console.log(readArgument);
}

displayShowContent()