var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello world!";
  }

  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet', data);
  }
};


// var util = require('util');
//
// function Greetr() {
//     EventEmitter.call(this);
//     this.greeting = "Hello world!";
// }
//
// util.inherits(Greetr, EventEmitter);
//
// Greetr.prototype.greet = function(data) {
//     console.log(this.greeting + ': ' + data);
//     this.emit('greet', data);
// };
//
// var greeter1 = new Greetr();
//
// greeter1.on('greet', (data) => {
//     console.log('Someone greeted!: ' + data);
// });
//
// greeter1.greet('Matt');
