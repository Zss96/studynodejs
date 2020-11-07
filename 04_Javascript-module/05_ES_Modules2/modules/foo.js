let name = {name: "why"};
let age = 18;
const sayHello = function(name) {
  console.log("你好" + name);
}

setTimeout(()=>{
  name="aaaa";
},1000)

export {
  name,
  age,
  sayHello
}

