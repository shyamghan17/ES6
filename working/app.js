var greet = require('./module.js')
greet()

var perosn = {
    firstName : 'ghanshyam',
    lastname:'mahato',
    greet: function (){
        console.log( 'Hello, ' + this.firstName + ' ' + this.lastname )
    }
}
perosn.greet() 
console.log(perosn['firstName'])