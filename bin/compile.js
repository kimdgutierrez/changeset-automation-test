const fs = require('fs');

const checkFileExistence = () => {
  if (fs.existsSync('package.json')) {
    console.log('package.json found!');
  }
}

(() => {
  checkFileExistence();
})();