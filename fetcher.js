const myArgs = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

const getFilesizeInBytes = (filename) => {
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

const makeRequest = (paths)=>{
  request(paths[0], (error, response, body) => {
    fs.writeFile(paths[1], body, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
      else{
        console.log(`Downloaded and saved ${getFilesizeInBytes(paths[1])} bytes to ${paths[1]}`)
      }
    });
});
}

makeRequest(myArgs);