const path = require('path');

console.log(__filename);

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// create Path Object
console.log(path.parse(__filename));

// concatenate path
console.log(path.join(__dirname, 'test\\shit', 'index.html'));
