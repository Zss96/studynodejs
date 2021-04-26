const http = require('http')

const server = http.createServer((req,res)=>{
  //设置响应的header\
  //方式1
  // res.setHeader("Content-Type", "text/plain;charset=utf8");
  //方式2
  res.writeHead(200,{
    'Content-Type':"text/plain;chartset==utf-8"
  });
  res.end("<h3>Hello Server</h3>")
});

//启动服务器
server.listen(8888,'0.0.0.0',()=>{
  console.log('服务器启动成功')
})