const http = require('http')

const server = http.createServer((req,res)=>{
  //设置响应的header
  //方式1:直接给属性赋值
  // res.statusCode = 200;
  
  //方式2： 和header一起设置
  res.writeHead(200);
  res.end("<h3>Hello Server</h3>")
});

//启动服务器
server.listen(8888,'0.0.0.0',()=>{
  console.log('服务器启动成功')
})