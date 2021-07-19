const o = {
    a: 'a',
    b: 'b',
    obj:{
        
    key:'key'
    }
}

const o2 = Object.assign({}, o)
o2.a = 'new value'
console.log(o2.a)