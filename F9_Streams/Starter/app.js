const fs = require('fs');

// takes options object with encoding
// highWaterMark sets max size for buffer in bytes
// 1024 bytes per kilobyte

const readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', (chunk) => {
	console.log(chunk.length);
	writable.write(chunk);
});






// var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
// var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
//
// readable.on('data', function(chunk) {
// 	console.log(chunk.length);
// 	writable.write(chunk);
// });
