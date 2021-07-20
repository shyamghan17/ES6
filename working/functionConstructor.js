function Person (firstName, lastName){

    this.firstName= firstName
    this.lastName = lastName
}

 Person.prototype.greet = function() {
    console.log(this.firstName+ ' ' + this.lastName)
 }

var ghashyam = new Person ('ghanshyam', 'mahato')


ghashyam.greet()

var radhey = new Person ('radhey', 'singh')

radhey.greet()

console.log(ghashyam.__proto__)