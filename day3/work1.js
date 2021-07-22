
var Emitter = require('events')

var emtr = new Emitter()
emtr.on('greet', function(){
    console.log('somewhere some one is loking for funding')
})

emtr.on('greet', function(){
    console.log('this is second emitter')
})

console.log('hello')
emtr.emit('greet')