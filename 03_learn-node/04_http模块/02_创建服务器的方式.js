const http = require('http')
// 创建server的两种方式
const server1 = http.createServer((req,res)=>{
  res.end('server1')
})

// server1.listen(8000,()=>{
//   console.log('server1...')
// })

// const server2 = http.createServer((req,res)=>{
//   res.end('server2')
// })

// server2.listen(8001,()=>{
//   console.log('server2...')
// })

// const server2 = new http.Server((req,res)=>{
//     res.end('server2')
//   });
//   server2.listen(8001,()=>{
//   console.log('server2...')
// })

//2.监听方法的使用
//port如果不写，就会随机生成
//host: locallhost本质上就是域名，通常会被解析成127.0.0.1
//127.0.0.1： 回环地址，主机之际发出去的报，直接被自己接收
//0.0.0.0：
server1.listen(()=>{
  console.log(server1.address().port)//获取端口号
})