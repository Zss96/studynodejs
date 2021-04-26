const http = require('http');
const url = require('url');
const qs = require('querystring')

//创建一个web服务器
const server = http.createServer((req,res)=>{
  //request对象中封装了客户端给我们服务器传递过来所有信息
  // if(req.url==='/login'){
  //   res.end("欢迎回来")
  // }else if (req.url ==='/users'){
  //   res.end("用户列表")
  // }else {
  //   res.end("错误请求,xx ")
  // }

  // /login?username=why&password=123
  // console.log(url.parse(req.url));
  const { pathname, query } = url.parse(req.url);
  if (pathname === '/login') {
    console.log(query);
    console.log(qs.parse(query));
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end("请求结果~");
  }
  
})

server.listen(8888,'0.0.0.0',()=>{
  console.log('服务器启动成功')
})