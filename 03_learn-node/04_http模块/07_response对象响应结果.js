const http = require('http')

const server = http.createServer((req,res)=>{
  //响应结果
  res.write("响应结果1")
  res.end("hello World")
});

//启动服务器
server.listen(8888,'0.0.0.0',()=>{
  console.log('服务器启动成功')
})