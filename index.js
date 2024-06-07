console.log('hello world');

global.randomNum = '23';

console.log(global.randomNum);

process.on('exit', function(){

    //do somehting
})

const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {

    console.log('yum');
})

eventEmitter.emit('lunch');