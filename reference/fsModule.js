const fs = require('fs');
const path = require('path');
const { exit } = require('process');

// create a Folder
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
  if (err) throw err;
  console.log('A Folder created');
});

// create and write into File (Over write)
fs.writeFile(
  path.join(__dirname, 'test', 'hello.txt'),
  'Hello World from Nodejs, ',
  (err) => {
    if (err) {
      console.log(err.message);
      exit(1);
    }
    console.log('Write successfully');
    // append data to a File
    fs.appendFile(
      path.join(__dirname, 'test', 'hello.txt'),
      'Im Nguyen Thanh Minh',
      (err) => {
        if (err) {
          console.log(err.message);
          exit(1);
        }
        console.log('Write successfully');
      }
    );
  }
);

// READ FILE
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, 'test', 'hello.txt'),
  path.join(__dirname, 'test', 'helloWorld.txt'),
  (err) => {
    if (err) throw err;
    console.log('Rename successfully');
  }
);
