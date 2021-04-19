// const map1 = new Map()

// map1.set('info', {name:'Ghansham', age:26})
// console.log(map1)

// Access Map Elements

// const map1 = new Map()

// map1.set('info', {name:'Ghansham', age:26})
// console.log(map1.get('info'))

// const map1 = new Map()

// map1.set('info', {name:'Ghansham', age:26})
// console.log(map1.has('info'))

// const map1 = new Map()

// map1.set('info', {name:'Ghansham', age:26})
// map1.delete('address')
// console.log(map1)

// const map1 = new Map()

// map1.set('info', {name:'Ghansham', age:26})

// map1.delete('info')
// console.log(map1)

// const map1 = new Map()
// map1.set ('info', {name:'ghanshyam', age:26})

// console.log(map1.size)


// let map1 = new Map()

// map1.set('name', 'Ghanshyam')
// map1.set('age', '26')

// map1.forEach(function (value, key) {
    


//     console.log(key + '_ ' + value)
// })

//Itrate Over Map keys
// let map1 = new Map()
// map1.set('name', 'Ghanshyam')
// map1.set('age', '26')

// for (let values of map1.values()){
    


//     console.log(values)
// }

let map1 = new Map()
map1.set('name', 'Ghanshyam')
map1.set('age', '26')
for (let elem of map1.entries()){

    console.log(`${elem[0]}: ${elem[1]}`)
}