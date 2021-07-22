var obj = {
    greet: 'Hello this is from nepal'
}

console.log(obj.greet)
console.log(obj['greet'])

var props = 'greet'
console.log(obj[props])

var arr = []

arr.push(function() {
    console.log('hello this is 1')
})
arr.push(function() {
    console.log('hello this is 2')
})
arr.push(function() {
    console.log('hello this is 3')
})

arr.forEach(function(item){
    item()
})
