const fs = require('fs');
const { execSync } = require('child_process');

// Fonction pour exécuter un fichier JS avec des arguments et retourner le résultat
const runJSFile = (filename, args) => {
  try {
    const output = execSync(`node ${filename} ${args}`).toString().trim();
    return output;
  } catch (error) {
    return error.stderr.toString().trim();
  }
}

// Fonction pour afficher un message de succès en vert
const printSuccess = (message) => {
  console.log('\x1b[32m%s\x1b[0m', message); // Vert
}

// Fonction pour afficher un message d'échec en rouge
const printFailure = (message) => {
  console.log('\x1b[31m%s\x1b[0m', message); // Rouge
}

// Charger la liste des fichiers à tester depuis un fichier JSON
const tests = JSON.parse(fs.readFileSync('air13.json'));

let totalSuccess = 0;
let totalTests = 0;

// Parcourir chaque test
for (const test of tests) {
  const { filename, args, expectedOutput } = test;
  totalTests++;

  // Exécuter le fichier JS avec les arguments
  const output = runJSFile(filename, args);

  // Vérifier si la sortie correspond à la sortie attendue
  if (output === expectedOutput) {
    printSuccess(`${filename} : success`);
    totalSuccess++;
  } else {
    printFailure(`${filename} : failure`);
  }
}

// Afficher le total des succès et des tests
console.log(`Total success: (${totalSuccess}/${totalTests})`);
