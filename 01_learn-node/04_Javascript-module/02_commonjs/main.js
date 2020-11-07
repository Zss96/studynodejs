/**
 * Node中实现CommonJS的本质就是对象的赋值
 * exports {name,age,sayHello}
 */


const bar = require('./bar')//返回exports 对象
// const {name,age,sayHello} = require('./bar')

console.log(bar.name)
console.log(bar.age)
bar.sayHello("kebe")

// setTimeout(()=>{
//   console.log(bar.name)
// },2000)

setTimeout(()=>{
  bar.name="哈哈"
},1000)


// console.log(name)
// console.log( age)
// bar.sayHello("kebe")

// require('./bar')
// console.log(require('./bar'))
// console.log(exports)
