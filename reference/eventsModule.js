const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('first listener function');
});

myEmitter.on('event', () => {
  console.log('second listener function');
});

myEmitter.on('event', () => {
  console.log('third listener function');
});

myEmitter.emit('event');

console.log('Nguyen Thanh Minh');
