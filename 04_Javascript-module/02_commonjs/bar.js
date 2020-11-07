//就是一个模块
const name ="bar"
const age = 18;

let message = "my name is bar";

function sayHello(name){
  console.log("hello"+name)
}
// setTimeout(()=>{
//   exports.name = "james"
// },1000)
setTimeout(()=>{
  console.log(exports.name)
},2000)

exports.name =name;
exports.age =age;
exports.sayHello =sayHello;
