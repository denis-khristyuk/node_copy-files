'use strict';

const fs = require('fs');

const copyFile = (file, copyPath) => {
  if (file === copyPath) {
    return;
  }

  const data = fs.readFileSync(file, 'utf8');

  fs.writeFileSync(copyPath, data);
};

copyFile('./src/text.txt', './src/copiedText.txt');
