const http = require('http');
const url = require('url');
const qs = require('querystring')

//创建一个web服务器
const server = http.createServer((req,res)=>{
  console.log(req.headers);
  req.on('data',data=>{

  })

  res.end('Hello Server')
  
})

server.listen(8888,'0.0.0.0',()=>{
  console.log('服务器启动成功')
})