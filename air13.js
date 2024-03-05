const fs = require('fs');
const { execSync } = require('child_process');

const fileNames = [
  'air00.js', 'air01.js', 'air02.js', 'air03.js', 'air04.js', 
  'air05.js', 'air06.js', 'air07.js', 'air08.js', 'air09.js', 
  'air10.js', 'air11.js', 'air12.js'
];

let successCount = 0;
let failureCount = 0;
const executeFile = (fileName) => {
  
  if (fileName === 'air00.js') {
    execSync(`node ${fileName} "Bonjour les gars"`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/2)`);

    execSync(`node ${fileName}`);
    failureCount++;
    console.log(`${fileName} : \x1b[31m failure \x1b[0m (2/2)`);
  }

  if (fileName === 'air01.js') {
    execSync(`node ${fileName} crevette magique dans la mer des étoiles la`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/1)`);
  }

  if (fileName === 'air02.js') {
    execSync(`node ${fileName} "je" "danse" "le" "mia"`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/1)`);
  }

  if (fileName === 'air03.js') {
    execSync(`node ${fileName} 1 2 3 4 5 4 3 2 1`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/2)`);

    execSync(`node ${fileName} bonjour monsieur bonjour`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (2/2)`);
  }

  if (fileName === 'air04.js') {
    execSync(`node ${fileName} hello milady, bien ou quoi    ??`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/1)`);
  }

  if (fileName === 'air05.js') {
    execSync(`node ${fileName} 1 2 3 4 5 "+2"`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/3)`);

    execSync(`node ${fileName} 10 12 13 14 15 "-5"`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (2/3)`);

    execSync(`node ${fileName} 1 2 3 4 5 `);
    failureCount++;
    console.log(`${fileName} : \x1b[31m failure \x1b[0m (3/3)`);
  }

  if (fileName === 'air06.js') {
    execSync(`node ${fileName} "Albert" "Michel" "Thérèse" "Benoit" "t"`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/2)`);

    execSync(`node ${fileName} "Albert" "Michel" "Thérèse" "Benoit" "a"`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (2/2)`);
  }

  if (fileName === 'air07.js') {
    execSync(`node ${fileName} 1 3 4 5 2`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/3)`);

    execSync(`node ${fileName} 10 20 30 40 50 60 33`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (2/3)`);

    execSync(`node ${fileName} 6 2 5 3 4 3`);
    failureCount++;
    console.log(`${fileName} : \x1b[31m failure \x1b[0m (3/3)`);
  }


  if (fileName === 'air08.js') {
    execSync(`node ${fileName} 10 20 30 fusion 15 25 35`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/2)`);

    execSync(`node ${fileName} 10 20 30 hello 15 25 35 `);
    failureCount++;
    console.log(`${fileName} : \x1b[31m failure \x1b[0m (2/2)`)
  }

  if (fileName === 'air09.js') {
    execSync(`node ${fileName} "Michel" "Albert" "Thérèse" "Benoit"`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/1)`);
  }

  if (fileName === 'air10.js') {
    execSync(`node ${fileName} a.txt`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/2)`);

    execSync(`node ${fileName} b.txt`);
    failureCount++;
    console.log(`${fileName} : \x1b[31m failure \x1b[0m (2/2)`)
  }

  if (fileName === 'air11.js') {
    execSync(`node ${fileName} o 5`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/2)`);

    execSync(`node ${fileName} o`);
    failureCount++;
    console.log(`${fileName} : \x1b[31m failure \x1b[0m (2/2)`)
  }

  if (fileName === 'air12.js') {
    execSync(`node ${fileName} 6 5 4 3 2 1`);
    successCount++;
    console.log(`${fileName} : \x1b[32m success \x1b[0m (1/2)`);

    execSync(`node ${fileName} hello`);
    failureCount++;
    console.log(`${fileName} :  \x1b[31m failure \x1b[0m (2/2)`)
  }
}


const executeAllFiles = () => {
  fileNames.forEach(fileName => {
    executeFile(fileName);
  });
}

executeAllFiles();

console.log(`Total success: (${successCount}/${successCount + failureCount})`);