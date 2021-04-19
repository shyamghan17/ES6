// const arrValue = ['my', 'name', 'is', 'ghanshyam']
// console.log(...arrValue)

// const arr1= [1, 2, 3]
// const arr2 = [arr1]

// arr1.push(4)

// console.log(arr1)
// console.log(arr2)

// const arr1= [1, 2, 3]
// const arr2 = [...arr1]

// arr1.push(4)

// console.log(arr1)
// console.log(arr2)


//Spread Operator with Object
// const obj1 = {X : 1, y : 2}
// const obj2 = { z : 3}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

let func = function (...args) {

    console.log(args)    
}
func(3)
func(4, 5, 6)

function sum(x, y, z) {
    console.log(x + y + z)    
}
const num1 = [1, 2, 3, 5]
sum(...num1)