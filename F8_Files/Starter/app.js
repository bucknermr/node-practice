const fs = require('fs');

// Synchronous file reading:

// Default second argument is utf8 encoding
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);


// Asynchronous file reading:
// Second paramater optional encoding argument
// Last parameter === error-first callback

const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log('Done!');
