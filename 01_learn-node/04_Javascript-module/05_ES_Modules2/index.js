// 演练: export和import结合使用
import { name, age, sayHello } from './modules/foo.js';


setTimeout(() => {
  // name: aaaaaaaa
  console.log(name);
}, 2000);

// setTimeout(() => {
//   name.name = "bbbbb";
// }, 1000);
