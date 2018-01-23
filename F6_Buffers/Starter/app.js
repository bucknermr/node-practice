const buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());


// ArrayBuffer takes a number of bytes
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
