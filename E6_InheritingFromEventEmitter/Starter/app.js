const Greetr = require('./greetr');

const greeter2 = new Greetr();
greeter2.on('greet', data => {
  console.log(`Somone greeted: ${data}`);
});

greeter2.greet("Matthew");
