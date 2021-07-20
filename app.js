function greet () {

    console.log('hi');
}
greet();
 //function are first class
function logGreeting (fn){
    fn()
}
logGreeting(greet)
//function expression 
var greetMe = function() {
    console.log('hello')
}
greetMe()

//it is stil it's first class 

logGreeting(greetMe);

logGreeting(function(){
    console.log('hello ghanshyam')
})

