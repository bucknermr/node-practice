// const Emitter = require('./emitter');
const Emitter = require('events');
const eventConfig = require('./config').events;

const emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);
