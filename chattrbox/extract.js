const path = require('path');

function extractFilePath(url){
  let fileName = 'index.html';
  if (url.length > 1){
    fileName = url.substring(1);
  }
  console.log('The file name is ' + fileName);
  let filePath = path.resolve('app',fileName);
  return filePath;
}

module.exports = extractFilePath;
