const weakMap = new WeakMap()
console.log(weakMap)
let obj = {}
weakMap.set(obj, 'hello')
console.log(weakMap)