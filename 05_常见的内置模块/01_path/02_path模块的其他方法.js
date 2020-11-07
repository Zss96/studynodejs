const path = require('path')

//获取路径的信息
const filepath = '/User/why/abc.txt';


// console.log(path.dirname(filepath))//
// console.log(path.basename(filepath))//文件名
// console.log(path.extname(filepath))//后缀名

//2.join路径拼接

const basepath = '/user/zss';
const filename = 'abc.txt';
const othername = '/zss.js'

const filepath1 = path.join(ba
  h, filename);
console.log(filepath1);