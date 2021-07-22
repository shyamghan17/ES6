function greeter()  {
    this.greeting = 'this is greetin form greeter'
    this.greet = function(){
            console.log(this.greeting)
        }
    }

module.export = new greeter()