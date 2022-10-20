// const _ = require('lodash')

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('hello people')


// EventEmitter is a class
const EventEmitter = require("events");
const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data received `);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})



customEmitter.emit('response')