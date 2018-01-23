const fs = require('fs');

// allows us to use a gzip file (particular type of compressed file) (.gz)
const zlib = require('zlib');

const readable = fs.createReadStream(__dirname + '/greet.txt');
const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

const compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// Every time a chunk is sent to it, it compresses it
// readable and writable (transform stream)
const gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);




// readable.pipe(writable) is the same as this:

// readable.on('data', (chunk) => {
// 	console.log(chunk);
// 	writable.write(chunk);
// });


// pipe function returns the destination, used for chaining pipes
