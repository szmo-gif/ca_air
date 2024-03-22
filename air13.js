const fs = require('fs');
const { execSync } = require('child_process');

// Fonction pour exécuter un fichier JS avec des arguments et retourner le résultat
const runJSFile = (filename, args) => {
    const output = execSync(`node ${filename} ${args}`, { encoding: 'utf-8' });
    return output.trim();
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
const loadTestsFromFile = (filename) => {
  try {
    const tests = JSON.parse(fs.readFileSync(filename, 'utf-8'));
    return tests;
  } catch (error) {
    console.error('Erreur lors du chargement des tests :', error.message);
    return [];
  }
}

// Fonction pour exécuter les tests
const runTests = (tests) => {
  let totalSuccess = 0;
  let totalTests = tests.length;

  tests.forEach(({ filename, args, expectedOutput }) => {
    // Exécuter le fichier JS avec les arguments
    const output = runJSFile(filename, args);

    // Vérifier si la sortie correspond à la sortie attendue
    if (output === expectedOutput) {
      printSuccess(`${filename} : success`);
      totalSuccess++;
    } else {
      printFailure(`${filename} : failure`);
    }
  });

  // Afficher le total des succès et des tests
  console.log(`Total success: (${totalSuccess}/${totalTests})`);
}

// Charger les tests depuis le fichier JSON et les exécuter
const tests = loadTestsFromFile('air13.json');
runTests(tests);
