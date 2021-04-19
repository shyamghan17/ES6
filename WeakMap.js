const weakMap = new WeakMap()
console.log(weakMap)
let obj = {}
// weakMap.set(obj, 'hello')
// console.log(weakMap)
// console.log(weakMap.get(obj))
// console.log(weakMap.has(obj))
// console.log(weakMap.delete(obj))

for (let i of weakMap) {
    console.log(i)
}